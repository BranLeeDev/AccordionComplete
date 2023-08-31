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
    <aside>
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
