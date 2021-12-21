'reach 0.1'

export const main = Reach.App(() => {
    const Caller = Participant('Caller', {
        // interface here
    });
    const Flipper = Participant('Flipper', {
        // interface here
    });
    deploy();

});