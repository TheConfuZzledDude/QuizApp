import { Answer } from "./Answer";

export interface Question {
  text: string;
  image?: string;
  answers: Answer[];
  explanation?: string;
}
