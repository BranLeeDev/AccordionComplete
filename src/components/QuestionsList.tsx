import React from "react";
import questionsData from "../utils/data.json";
import Question from "./Question";

interface QuestionData {
  id: number;
  title: string;
  info: string;
}

const QuestionsList: React.FC = () => {
  const questions: QuestionData[] = questionsData;

  return (
    <aside className="col-start-1 col-end-7 row-start-2 row-end-7 flex h-full flex-col justify-between gap-2 overflow-y-auto overscroll-y-auto px-4 sm:col-start-3 sm:row-start-1">
      {questions.map((question) => (
        <Question
          key={question.id}
          title={question.title}
          info={question.info}
        />
      ))}
    </aside>
  );
};

export default QuestionsList;
