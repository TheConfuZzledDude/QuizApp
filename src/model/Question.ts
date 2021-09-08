import { Answer } from "model/Answer";

export enum QuestionType {
  single,
  multiOr,
  multiAnd,
}

export interface Question {
  text: string;
  image?: string;
  questionType: QuestionType;
  answers: Answer[];
  explanation?: string;
}
