'reach 0.1'

// Create participant interact interface

const Player = {
    chooseFace: Fun([], Bytes(6)),
    tossCoin: Fun([], Bytes(6)),
    seeOutcome: Fun([UInt], Null),
};

// instantiate two players

export const main = Reach.App(() => {
    const Caller = Participant('Caller', {
        ...Player,
        wager: UInt,
    });
    const Flipper = Participant('Flipper', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    deploy();

    Caller.only(() => {
        const wager = declassify(interact.wager);
        const faceCaller = declassify(interact.chooseFace());
    });
    Caller.publish(wager, faceCaller)
      .pay(wager);
    commit();

    Flipper.only(() => {
        interact.acceptWager(wager);
        const tossResult = declassify(interact.tossCoin());
    });
    Flipper.publish(tossResult)
      .pay(wager);

    const outcome = (faceCaller == tossResult) ? 1 : 0;  // 0: bob wins 1: alice wins
    const            [forCaller, forFlipper] =
      outcome == 1 ? [       2,      0] :
                     [       0,      2];
    transfer(forCaller * wager).to(Caller);
    transfer(forFlipper * wager).to(Flipper);
    commit();
    
    each([Caller, Flipper], () => {
        interact.seeOutcome(outcome);
    });
});