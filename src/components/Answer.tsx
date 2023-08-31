import React from "react";

interface Props {
  isOpenAnswer: boolean;
  answer: string;
}

const Answer: React.FC<Props> = ({ isOpenAnswer, answer }) => {
  return (
    <p
      className="text-base text-gray-600"
      style={{ display: isOpenAnswer ? "block" : "none" }}
    >
      {answer}
    </p>
  );
};

export default Answer;
