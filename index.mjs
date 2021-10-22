import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
    
(async () => {
const startingBalance = stdlib.parseCurrency(10);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
    
const ctcAlice = accAlice.deploy(backend);
const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

const FACE = ['Heads', 'Tails'];
const COIN = ['Heads', 'Tails'];
const OUTCOME = ['Bob wins', 'Alice wins'];
const Player = (Who) => ({
    chooseFace: () => {
        let faceName = "";
        const face = Math.floor(Math.random() * 2);
        console.log(`${Who} chose ${FACE[face]}`);
        console.log(`The constant face is ${face}`);
        if (face == 0) {
            faceName = "Heads";
        } else {
            faceName = "Tails";
        }
        return faceName;
    },
    tossCoin: () => {
        let coinName = "";
        const coin = (Math.floor(Math.random() * 2) == 0);
        if (coin) { 
            coinName = "Heads";
        } else {
            coinName = "Tails";
        }
        console.log(`The coin flip reveals ${coinName}`);
        console.log(`The coin number is ${coin}`);
        return coinName;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
});

await Promise.all([
    backend.Alice(ctcAlice, {
    // implement Alice's interact object here
        ...Player('Alice'),
    }),
    backend.Bob(ctcBob, {
    // implement Bob's interact object here
        ...Player('Bob'),
    }),
]);
})(); // <-- Don't forget these!

// console.log("faceAlice is: " + faceAlice);
// console.log("The tossResult is: " + tossResult);
// console.log("The outcome value is: " + outcome);