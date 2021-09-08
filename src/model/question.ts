import { answer } from "./answer";

export interface question {
  text: string;
  image?: string;
  answers: {
    correct: answer[];
    wrong: answer[];
  };
  explanation?: string;
}
