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
const COIN = ['HEADS', 'TAILS'];
const OUTCOME = ['Bob wins', 'Alice wins'];
const Player = (Who) => ({
    chooseFace: () => {
        const face = Math.floor(Math.random() * 2);
        console.log(`${Who} chose ${FACE[face]}`);
        return face;
    },
    tossCoin: () => {
        x = (Math.floor(Math.random() * 2) ==0);
        if (x) {
            outcome("HEADS");
        } else {
            outcome("TAILS");
        }
        console.log(`The coin flip revea;s ${outcome}`);
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