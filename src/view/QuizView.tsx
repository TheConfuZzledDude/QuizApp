import React from "react";
import { Quiz } from "model/Quiz";

interface QuizViewProps {
  quiz: Quiz;
}

export const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  return <p>{JSON.stringify(quiz)}</p>;
};
