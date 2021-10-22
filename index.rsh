'reach 0.1'

// Create Player parent class

const Player = {
    chooseFace: Fun([], Bytes(6)),
    tossCoin: Fun([], Bytes(6)),
    seeOutcome: Fun([UInt], Null),
};

// instantiate two players

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        // interface here
        ...Player,
    });
    const Bob = Participant('Bob', {
        // interface here
        ...Player,
    });
    deploy();

    Alice.only(() => {
        const faceAlice = declassify(interact.chooseFace());
    });
    Alice.publish(faceAlice);
    commit();

    Bob.only(() => {
        //const faceBob = declassify(interact.chooseFace());
        const tossResult = declassify(interact.tossCoin());
    });
    Bob.publish(tossResult);

    const outcome = (faceAlice == tossResult) ? 1 : 0;  // 0: bob wins 1: alice wins
    commit();
    
    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});