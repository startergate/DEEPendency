import * as readline from 'readline';

import axios from 'axios';

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('STEAM ID> ', (id: string) => {
    rl.question('APP NAME> ', (appName: string) => {
        
    });
});