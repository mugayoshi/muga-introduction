import * as React from "react";
import classNames from "classnames";

interface TerminalLineProps {
    classes: string[];
    questionIndex: number;
    question: string;
    questionAnswer: string;
    totalQuestions: number;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({
    classes,
    questionIndex,
    question,
    questionAnswer,
    totalQuestions,
}) => {
    return (
        <>
            <p className={classNames(...classes)}>
                ✅ [{questionIndex}/{totalQuestions}] {question}:{" "}
                {questionAnswer}
            </p>
        </>
    );
};
