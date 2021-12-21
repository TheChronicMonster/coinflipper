import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
    
(async () => {
const startingBalance = stdlib.parseCurrency(10);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
    
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const FACE = ['Heads', 'Tails'];
const COIN = ['Heads', 'Tails'];
const OUTCOME = ['Bob wins', 'Alice wins'];
const Player = (Who) => ({
    ...stdlib.hasRandom,
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
        wager: stdlib.parseCurrency(5),
    }),
    backend.Bob(ctcBob, {
    // implement Bob's interact object here
        ...Player('Bob'),
        acceptWager: (amt) => {
            console.log(`Bob accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

})(); // <-- Don't forget these!

// console.log("faceAlice is: " + faceAlice);
// console.log("The tossResult is: " + tossResult);
// console.log("The outcome value is: " + outcome);