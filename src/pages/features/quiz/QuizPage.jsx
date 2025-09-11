import HeaderQuiz from"./HeaderQuiz"
import Quiz from"./Quiz"
import SelectQuizzes from "./SelectQuizzes"
import { QuizProvider } from "./QuizContext";
import "./Quiz.css";

export default function QuizPage() {
  return (
    <QuizProvider>
        <div className="quiz-scope">
          <HeaderQuiz/>
          <SelectQuizzes/>
          <Quiz/>
          <p>Quizzes created by chatgpt</p>
        </div>
    </QuizProvider>
  );
}
