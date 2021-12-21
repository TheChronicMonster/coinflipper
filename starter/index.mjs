import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
    
(async () => {
const startingBalance = stdlib.parseCurrency(10);
const accCaller = await stdlib.newTestAccount(startingBalance);
const accFlipper = await stdlib.newTestAccount(startingBalance);
    
const ctcCaller = accCaller.contract(backend);
const ctcFlipper = accFlipper.contract(backend, ctcCaller.getInfo());

await Promise.all([
    backend.Caller(ctcCaller, {
    // implement Caller's interact object here
    }),
    backend.Flipper(ctcFlipper, {
    // implement Flipper's interact object here
    }),
]);
})(); // <-- Don't forget these!