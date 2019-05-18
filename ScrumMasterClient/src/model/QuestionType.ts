export class QuestionType {
    qTypeId: number;
    category: string;

    constructor(qTypeId: number, category: string) {
        this.qTypeId = qTypeId;
        this.category = category;
    }
}