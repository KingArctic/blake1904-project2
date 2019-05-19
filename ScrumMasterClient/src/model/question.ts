export class Question {
    questionId: number;
    question: string;
    answer: string;
    wrongAnswerA: string;
    wrongAnswerB: string;
    wrongAnswerC: string;
    questionTypeId: number;
    difficulty: number;
    

    constructor(questionId: number, question: string, answer: string, 
        wrongAnswerA: string, wrongAnswerB: string, wrongAnswerC: string, 
        questionTypeId: number, difficulty: number) {
        this.questionId = questionId;
        this.question = name;
        this.answer = answer;
        this.wrongAnswerA = wrongAnswerA;
        this.wrongAnswerB = wrongAnswerB;
        this.wrongAnswerC = wrongAnswerC;
        this.questionTypeId = questionTypeId;
        this.difficulty = difficulty;

    }
}