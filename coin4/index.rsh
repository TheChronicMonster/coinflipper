'reach 0.1'

const [ isFace, HEADS, TAILS ] = makeEnum(2);
const [ isOutcome, A_WINS, B_WINS ] = makeEnum(2);

const winner = (faceAlice == tossResult) ? 1 : 0;

  assert(winner(HEADS, TAILS) == A_WINS);
  assert(winner(TAILS, HEADS) == B_WINS);

  forall(UInt, faceAlice =>
    forall(UInt, faceBob =>
        assert(isOutcome(winner(faceAlice, faceBob)))));

// Create participant interact interface

const Player = {
    ...hasRandom,
    chooseFace: Fun([], Bytes(6)),
    tossCoin: Fun([], Bytes(6)),
    seeOutcome: Fun([UInt], Null),
};

// instantiate two players

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        // interface here
        ...Player,
        wager: UInt,
    });
    const Bob = Participant('Bob', {
        // interface here
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    deploy();

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const _faceAlice = interact.chooseFace();
        const [_commitAlice, _saltAlice] = makeCommitment(interact, _faceAlice);
        const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(wager, faceAlice)
      .pay(wager);
    commit();

    unknowable(Bob, Alice(_faceAlice, _saltAlice));
    Bob.only(() => {
        interact.acceptWager(wager);
        const faceBob = declassify(interact.tossCoin());
    });
    Bob.publish(tossResult)
      .pay(wager);
    commit();

    // Bob.only(() => {
    //     interact.acceptWager(wager);
    //     //const faceBob = declassify(interact.chooseFace());
    //     const tossResult = declassify(interact.tossCoin());
    // });
    // Bob.publish(tossResult)
    //   .pay(wager);

    Alice.only(() => {
        const saltAlice = declassify(_saltAlice);
        const faceAlice = declassify(_faceAlice);
    });
    Alice.publish(saltAlice, faceAlice);
    checkCommitment(commitAlice, saltAlice, faceAlice);

    const outcome = (faceAlice == tossResult);  // 0: bob wins 1: alice wins
    const            [forAlice, forBob] =
      outcome == 1 ? [       2,      0] :
                     [       0,      2];
    transfer(forAlice * wager).to(Alice);
    transfer(forBob * wager).to(Bob);
    commit();
    
    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});