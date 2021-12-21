import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
    
(async () => {
const startingBalance = stdlib.parseCurrency(10);
const accCaller = await stdlib.newTestAccount(startingBalance);
const accFlipper = await stdlib.newTestAccount(startingBalance);
    
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeCaller = await getBalance(accCaller);
const beforeFlipper = await getBalance(accFlipper);

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
        return coinName;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
});

await Promise.all([
    backend.Caller(ctcCaller, {
        ...Player('Caller'),
        wager: stdlib.parseCurrency(5),
    }),
    backend.Flipper(ctcFlipper, {
        ...Player('Flipper'),
        acceptWager: (amt) => {
            console.log(`Flipper accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

const afterCaller = await getBalance(accCaller);
const afterFlipper = await getBalance(accFlipper);

console.log(`Caller went from ${beforeCaller} to ${afterCaller}.`);
console.log(`Flipper went from ${beforeFlipper} to ${afterFlipper}.`);

})(); // <-- Don't forget these!

// console.log("faceCaller is: " + faceCaller);
// console.log("The tossResult is: " + tossResult);
// console.log("The outcome value is: " + outcome);