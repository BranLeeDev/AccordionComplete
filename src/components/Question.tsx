import React, { useState } from "react";
import AnswerQuestion from "./AnswerQuestion";

interface Props {
  title: string;
  info: string;
}

const Question: React.FC<Props> = ({ title, info }) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState<boolean>(false);

  const handleShowAnswer = (): void => {
    setIsOpenAnswer(!isOpenAnswer);
  };

  return (
    <section>
      <div>
        <h2>{title}</h2>
        <button
          className="relative flex h-5 w-5 flex-col justify-center gap-3"
          onClick={handleShowAnswer}
        >
          <span className="line-btn"></span>
          <span className="line-btn absolute rotate-90"></span>
        </button>
      </div>
      <AnswerQuestion isOpenAnswer={isOpenAnswer} answer={info} />
    </section>
  );
};

export default Question;
