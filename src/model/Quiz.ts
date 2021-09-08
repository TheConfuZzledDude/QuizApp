import { Question } from "model/Question";

export interface Quiz {
  title: string;
  questions: Question[];
}
