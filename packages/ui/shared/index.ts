export class Car {
    public drive(speed: number) {
        console.log(`driving at speed ${speed}...`);
        return Promise.resolve();
    }
}
