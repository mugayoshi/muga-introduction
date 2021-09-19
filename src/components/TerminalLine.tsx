import classNames from "classnames";
import { useState, VFC, useEffect } from "react";

interface TerminalLineProps {
    classes: string[];
    questionIndex: number;
    question: string;
    questionAnswer: string;
    totalQuestions: number;
}

export const TerminalLine: VFC<TerminalLineProps> = ({
    classes,
    questionIndex,
    question,
    questionAnswer,
    totalQuestions,
}) => {
    const [displayedLine, setDisplayedLine] = useState("");
    const [displayedCharIndex, setCharIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (displayedCharIndex > questionAnswer.length) {
                return;
            }
            const currentIndex = displayedCharIndex;
            const charts = Array.from(questionAnswer);
            setDisplayedLine(charts.slice(0, displayedCharIndex).join(""));
            setCharIndex(currentIndex + 1);
        }, 100);
        return () => clearInterval(timer);
    }, [displayedCharIndex, questionAnswer]);

    return (
        <>
            <p className={classNames(...classes)}>
                {displayedCharIndex > questionAnswer.length ? "✅ " : " "}[
                {questionIndex}/{totalQuestions}] {question}: {displayedLine}
            </p>
        </>
    );
};
