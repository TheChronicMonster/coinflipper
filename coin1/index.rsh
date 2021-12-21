'reach 0.1'

const Player = {
    chooseFace: Fun([], Bytes(6)),
    tossCoin: Fun([], Bytes(6)),
    seeOutcome: Fun([UInt], Null),
};

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
        // Methods that only Caller can perform
    });

    Flipper.only(() => {
        // Methods that only Flipper can perform
    });
});