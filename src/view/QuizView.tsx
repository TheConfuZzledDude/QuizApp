import React from "react";
import { Quiz } from "model/Quiz";

interface QuizViewProps {
  quiz: Quiz;
}

export class QuizView extends React.Component<QuizViewProps> {
  render() {
    return <p>{JSON.stringify(this.props.quiz)}</p>;
  }
}
