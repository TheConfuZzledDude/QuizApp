import { Quiz } from "../model/Quiz";

export function getTestQuiz(): Quiz {
  return {
    title: "Test Quiz",
    questions: [
      {
        text: "What's 9 + 10?",
        answers: [
          {
            text: "17",
            correct: false,
          },
          {
            text: "19",
            correct: true,
          },
          {
            text: "21",
            correct: false,
          },
          {
            text: "23",
            correct: false,
          },
        ],
      },
      {
        text: "Who was born first?",
        answers: [
          {
            text: "Martin Luther King Jr.",
            image:
              "https://tuntimo.com/wp-content/uploads/2020/08/Martin-Luther-King-Junior-1-768x1024.png",
            correct: false,
          },
          {
            text: "Malcolm X",
            image:
              "https://tuntimo.com/wp-content/uploads/2020/10/Malcolm-768x1024.png",
            correct: true,
          },
        ],
      },
    ],
  };
}
