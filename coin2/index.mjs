import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
    
(async () => {
const startingBalance = stdlib.parseCurrency(10);
const accCaller = await stdlib.newTestAccount(startingBalance);
const accFlipper = await stdlib.newTestAccount(startingBalance);
    
const ctcCaller = accCaller.contract(backend);
const ctcFlipper = accFlipper.contract(backend, ctcCaller.getInfo());

const FACE = ['Heads', 'Tails'];
const COIN = ['Heads', 'Tails'];
const OUTCOME = ['Flipper wins', 'Caller wins'];
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
    backend.Caller(ctcCaller, {
    // implement Caller's interact object here
        ...Player('Caller'),
    }),
    backend.Flipper(ctcFlipper, {
    // implement Flipper's interact object here
        ...Player('Flipper'),
    }),
]);
})(); // <-- Don't forget these!

// console.log("faceCaller is: " + faceCaller);
// console.log("The tossResult is: " + tossResult);
// console.log("The outcome value is: " + outcome);