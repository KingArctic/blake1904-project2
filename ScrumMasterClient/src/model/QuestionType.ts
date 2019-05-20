export class QuestionType {
    questionTypeId: number;
    category: string;

    constructor(qTypeId: number, category: string) {
        this.questionTypeId = qTypeId;
        this.category = category;
    }
}