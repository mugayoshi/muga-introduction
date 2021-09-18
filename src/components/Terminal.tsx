import * as React from "react";
import { MacAppWindow } from "./AppWindow";
import { TerminalLine } from "./TerminalLine";

interface SelfIntroQuestion {
    question: string;
    answer: string;
}
const questionsAndAnswers: SelfIntroQuestion[] = [
    {
        question: "name",
        answer: "Muga Yoshikawa",
    },
    {
        question: "birthday",
        answer: "30th January",
    },
    {
        question: "from",
        answer: "Japan",
    },
];

export const Terminal: React.FC = () => {
    const lineClasses = ["ml-2", "text-white", "font-mono", "mt-1"];

    return (
        <>
            <div className="left-5 w-4/5 my-10 ml-10 rounded">
                <MacAppWindow />
                <div
                    className="container bg-black bg-opacity-70 my-0"
                    style={{ minHeight: "400px" }}
                >
                    <p className="ml-2 text-white font-mono">
                        ~ $: npm run IntroduceYourself
                    </p>
                    {questionsAndAnswers.map((item, i) => (
                        <TerminalLine
                            classes={lineClasses}
                            question={item.question}
                            questionAnswer={item.answer}
                            questionIndex={i + 1}
                            totalQuestions={questionsAndAnswers.length}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
