import { Subfolder } from '@tomsssm/server/middleware/sub';
import { middleware } from '@tomsssm/server/middleware';

const s = new Subfolder();

middleware();

console.log(s.name);
