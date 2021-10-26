'reach 0.1'

// instantiate two players

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        // interface here
    });
    const Bob = Participant('Bob', {
        // interface here
    });
    deploy();

});