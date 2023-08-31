import React from "react";

interface Props {
  isOpenAnswer: boolean;
  answer: string;
}

const AnswerQuestion: React.FC<Props> = ({ isOpenAnswer, answer }) => {
  return <p style={{ display: isOpenAnswer ? "block" : "none" }}>{answer}</p>;
};

export default AnswerQuestion;
