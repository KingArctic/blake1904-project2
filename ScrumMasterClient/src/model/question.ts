import { QuestionType } from "./QuestionType";

export class Question {
    questionId: number;
    question: string;
    answer: string;
    wrongAnswerA: string;
    wrongAnswerB: string;
    wrongAnswerC: string;
    questionTypeId: QuestionType;
    difficulty: number;
    

    constructor(questionId: number, question: string, answer: string, 
        wrongAnswerA: string, wrongAnswerB: string, wrongAnswerC: string, 
        questionTypeId= new QuestionType(0,""), difficulty: number) {
        this.questionId = questionId;
        this.question = question;
        this.answer = answer;
        this.wrongAnswerA = wrongAnswerA;
        this.wrongAnswerB = wrongAnswerB;
        this.wrongAnswerC = wrongAnswerC;
        this.questionTypeId = questionTypeId;
        this.difficulty = difficulty;

    }
}