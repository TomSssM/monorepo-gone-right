class Client {
    private name: string;

    constructor() {
        this.name = 'Client';
    }

    sayName(): string {
        return this.name;
    }
}

export default Client;
