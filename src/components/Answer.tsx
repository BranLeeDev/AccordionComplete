import React from "react";

interface Props {
  isOpenAnswer: boolean;
  answer: string;
}

const Answer: React.FC<Props> = ({ isOpenAnswer, answer }) => {
  return (
    <p
      className="overflow-hidden text-base text-gray-600 transition-all duration-300 ease-in-out"
      style={{ height: isOpenAnswer ? "100%" : "0" }}
    >
      {answer}
    </p>
  );
};

export default Answer;
