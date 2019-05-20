export class Difficulty {
    difficultyId: number;
    points: number;

    constructor(difficultyId: number, points: number) {
        this.difficultyId = difficultyId;
        this.points = points;
    }
}