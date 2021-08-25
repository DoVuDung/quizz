export class AnswerModel {
    public Answer: String
}
export class QuizModel {
    public Question: String;
    public Answer: [AnswerModel];
}
