import { existsSync } from 'node.fs';

if (existsSync(/games/spaceinvaders/src/indexedDB.html)) {
    console.log("index bien présent !");
}
else {
    console.error("index non présent");
    process.exit(1);
}

import { readFileSync } from 'node:fs';

const scriptContent = readFileSync('./games/spaceinvaders/src/ts/index.ts')


const htmlContent = readFileSync('')