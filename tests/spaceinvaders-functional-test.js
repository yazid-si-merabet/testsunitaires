import { existsSync } from 'node.fs';

if (existsSync(/games/spaceinvaders/src/indexedDB.html)) {
    console.log("index bien présent !");
}
else {
    console.error("index non présent");
    process.exit(1);
}