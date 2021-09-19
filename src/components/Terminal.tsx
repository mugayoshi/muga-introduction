import { useEffect, useState, VFC } from "react";
import { MacAppWindow } from "./AppWindow";
import { TerminalLine } from "./TerminalLine";

interface SelfIntroQuestion {
    question: string;
    answer: string;
}

const nameQuestionAndAnswer: SelfIntroQuestion = {
    question: "name",
    answer: "Muga Yoshikawa",
};

const birthday: SelfIntroQuestion = {
    question: "birthday",
    answer: "30th January",
};
const country: SelfIntroQuestion = {
        question: "from",
        answer: "Japan",
};
const questionsAndAnswers: SelfIntroQuestion[] = [
    nameQuestionAndAnswer,
    birthday,
    country,
];

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Terminal: VFC = () => {
    const lineClasses = ["ml-2", "text-white", "font-mono", "mt-1"];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [lines, setLine] = useState([] as SelfIntroQuestion[]);

    useEffect(() => {
        setCurrentDate(new Date());
        (async () => {
            await sleep(1000);
            setLine(questionsAndAnswers.slice(0, 1));
            await sleep(questionsAndAnswers[0].answer.length * 100 + 500);
            setLine(questionsAndAnswers.slice(0, 2));
            await sleep(questionsAndAnswers[1].answer.length * 100 + 500);
            setLine(questionsAndAnswers.slice(0, 3))
        })();
    }, []);

    return (
        <>
            <div className='left-5 w-4/5 my-10 ml-10 rounded'>
                <MacAppWindow />
                <div
                    className='container bg-black bg-opacity-70 my-0'
                    style={{ minHeight: "400px" }}
                >
                    <p className='ml-2 text-white font-mono'>
                        [{currentDate.toLocaleDateString()}{" "}
                        {currentDate.toLocaleTimeString()}]<br /> ~ $: run
                        IntroduceYourself
                    </p>
                    {lines.map((item, i) => (
                        <TerminalLine
                            key={i}
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
