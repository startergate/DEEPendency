import * as readline from 'readline';

import subscribe from "./dpnd";

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('STEAM ID> ', (id: string) => {
    rl.question('APP NAME> ', async (appName: string) => {
        await subscribe(id, 'random', parseInt(appName));
    });
});