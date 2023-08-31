import React, { useState } from "react";
import AnswerQuestion from "./Answer";

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
    <section className="border border-gray-950 border-opacity-10 p-2">
      <div className="grid grid-cols-10 items-center">
        <h2 className="col-start-1 col-end-10 text-xl text-gray-900">
          {title}
        </h2>
        <button
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-3 rounded-full bg-gray-300"
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
