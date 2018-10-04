export class Rank {
    protected name: string;
    protected minimumLevel: number;
    protected maximumLevel: number;

    constructor() {}

    public getName(): string { return this.name; }
    public isLevelInRange(level: number): boolean {
        return this.maximumLevel >= level && this.minimumLevel <= level;
    }
}