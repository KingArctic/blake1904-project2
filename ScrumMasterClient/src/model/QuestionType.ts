export class QuestionType {
    questionTypeId: number;
    category: string;

    constructor(qTypeId: 0, category: "") {
        this.questionTypeId = qTypeId;
        this.category = category;
    }
}