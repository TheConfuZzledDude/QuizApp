import { Answer } from "model/Answer";

export interface Question {
  text: string;
  image?: string;
  answers: Answer[];
  explanation?: string;
}
