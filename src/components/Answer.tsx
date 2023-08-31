import React from "react";

interface Props {
  isOpenAnswer: boolean;
  answer: string;
}

const Answer: React.FC<Props> = ({ isOpenAnswer, answer }) => {
  return (
    <p
      className={`text-base text-gray-600 transition-all duration-300 ease-in-out ${
        isOpenAnswer ? "h-full overflow-auto" : "invisible h-0 overflow-hidden"
      }`}
    >
      {answer}
    </p>
  );
};

export default Answer;
