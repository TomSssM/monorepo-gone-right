import { Car } from '@tomsssm/ui/shared';

const c = new Car();

c.drive(890).then(() => {
    console.log('shared');
});
