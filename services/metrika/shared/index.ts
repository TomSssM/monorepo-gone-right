import { Car } from '@tomsssm/ui/shared';
import { Test } from '@tomsssm/test/Test';

const c = new Car();

const t = new Test('dude');

console.log(t.name);

c.drive(890).then(() => {
    console.log('shared');
});
