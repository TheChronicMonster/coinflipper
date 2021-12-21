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
        // interface here
        ...Player,
    });
    const Flipper = Participant('Flipper', {
        // interface here
        ...Player,
    });
    deploy();

    Caller.only(() => {
        const faceCaller = declassify(interact.chooseFace());
    });
    Caller.publish(faceCaller);
    commit();

    Flipper.only(() => {
        //const faceFlipper = declassify(interact.chooseFace());
        const tossResult = declassify(interact.tossCoin());
    });
    Flipper.publish(tossResult);

    const outcome = (faceCaller == tossResult) ? 1 : 0;  // 0: bob wins 1: alice wins
    commit();
    
    each([Caller, Flipper], () => {
        interact.seeOutcome(outcome);
    });
});