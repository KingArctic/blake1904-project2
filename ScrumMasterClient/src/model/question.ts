import { QuestionType } from "./QuestionType";
import { Difficulty } from "./Difficulty";

export class Question {
    questionId: number;
    question: string;
    answer: string;
    wrong1: string;
    wrong2: string;
    wrong3: string;
    questionTypeId: QuestionType;
    difficulty: Difficulty;
    

    constructor(questionId: number, question: string, answer: string, 
        wrongAnswerA: string, wrongAnswerB: string, wrongAnswerC: string, 
<<<<<<< Updated upstream
        questionTypeId= new QuestionType(0,""), difficulty= new Difficulty(0,0)) {
=======
        questionTypeId= new QuestionType(0,''), difficulty: number) {
>>>>>>> Stashed changes
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