'use client'
import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./Question.module.css";
import {useState} from "react";
import {Roboto} from "next/font/google";
import Image from "next/image";
import {Question} from "@/features/Questions/model/type/question";

const robot = Roboto({
    weight: "400",
    display: 'swap',
    subsets: ['cyrillic-ext', 'greek'],
})

interface QuestionProps {
    className?: string;
    question: Question;
}

export const QuestionCard = ({className, question}: QuestionProps) => {
    const [collapsed, setCollapsed] = useState(false);
    function answerClick() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            className={classNames(classes.QuestionCard, {}, [className, robot.className])}
            onClick={answerClick}
        >
            <div className={classes.nameQuestion}>
                {question.nameQuestion}
                <Image
                    src={collapsed ? "/svg/arrow_open.svg" : "/svg/arrow_close.svg"}
                    alt={collapsed ? "arrow_close" : "arrow_open"}
                    width={28}
                    height={28}
                />
            </div>
            {
                collapsed &&
                <div className={classes.answer}>
                    <br/>
                    {question.answer}
                </div>
            }
        </div>
    );
};
