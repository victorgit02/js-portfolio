import { writeFileSync } from 'fs';
writeFileSync('./.env', `API=${process.env.API}\n`);