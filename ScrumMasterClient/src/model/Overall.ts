export class Overall {
    overallId: number;
    javaDifficulty: number;
    jsDifficulty: number;
    sqlDifficulty: number;
    hibernateDifficulty: number;
    springDifficulty: number;
    reactDifficulty: number;
    nodeDifficulty: number;

    constructor(overallId: number, javaDifficulty: number, jsDifficulty: number, sqlDifficulty: number, 
        hibernateDifficulty: number, springDifficulty: number, reactDifficulty: number, nodeDifficulty: number) {
        this.overallId = overallId;
        this.javaDifficulty = javaDifficulty;
        this.jsDifficulty = jsDifficulty;
        this.sqlDifficulty = sqlDifficulty;
        this.hibernateDifficulty = hibernateDifficulty;
        this.springDifficulty = springDifficulty;
        this.reactDifficulty = reactDifficulty;
        this.nodeDifficulty = nodeDifficulty;
    }
}