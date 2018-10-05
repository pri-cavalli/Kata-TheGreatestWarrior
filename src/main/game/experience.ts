export class Experience {
    private value: number;

    private readonly MINIMAL_VALUE = 100;
    private readonly MAXIMUM_VALUE = 10000;

    constructor(value?: number) {
        this.setValue(value);
    }

    private setValue(value: number = this.MINIMAL_VALUE): void {
        if(value < this.MINIMAL_VALUE) {
            this.value = this.MINIMAL_VALUE;
        }
        else if(value > this.MAXIMUM_VALUE ) {            
            this.value = this.MAXIMUM_VALUE;
        }
        else {       
            this.value = value;
        }
    }

    public getValue(): number {
        return this.value;
    }

    addToValue(valueToAdd: number): any {
        this.value += valueToAdd;
    }
}