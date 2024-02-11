class UniqueId {
    private counter: number;

    constructor() {
        this.counter = 0;
    }

    private incrementCounter(): void {
        this.counter++;
    }

    private getRandomString(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    generate(prefix: string): string {
        this.incrementCounter();
        return `${prefix}_${this.counter}_${this.getRandomString()}`;
    }
}

export class UniqueIdSingleton {
    private static instance: UniqueId;

    static getInstance(): UniqueId {
        if (!this.instance) {
            this.instance = new UniqueId();
        }

        return this.instance;
    }
}
