import scores  from './ScoreBoard';

export class Player {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }

    wins(points: number) {
        scores.update(this.name, points);
    }

    loses(points: number) {
        scores.update(this.name, -points);
    }

}