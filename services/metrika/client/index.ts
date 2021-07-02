import { Client } from '@tomsssm/ui/client';
import '@tomsssm/ui/styles/variables.scss';

const c = new Client();
const name = c.sayName();

console.log('metrika client');

console.log(`metrika: ${name}`);
