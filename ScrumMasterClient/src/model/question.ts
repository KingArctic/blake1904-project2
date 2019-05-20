import { QuestionType } from "./QuestionType";

export class Question {
    questionId: number;
    question: string;
    answer: string;
    wrong1: string;
    wrong2: string;
    wrong3: string;
    questionTypeId: QuestionType;
    difficulty: number;
    

    constructor(questionId: number, question: string, answer: string, 
        wrongAnswerA: string, wrongAnswerB: string, wrongAnswerC: string, 
        questionTypeId= new QuestionType(0,""), difficulty: number) {
        this.questionId = questionId;
        this.question = question;
        this.answer = answer;
        this.wrong1 = wrongAnswerA;
        this.wrong2 = wrongAnswerB;
        this.wrong3 = wrongAnswerC;
        this.questionTypeId = questionTypeId;
        this.difficulty = difficulty;

    }
}