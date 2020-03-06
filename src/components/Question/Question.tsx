import React from 'react';
import { IQuestion } from '../../redux/reducers/quizReducer';
import styles from './Question.module.css';
import { Button } from "../Button";
import {checkAnswer, nextQuestion} from "../../redux/actions";
import {connect} from "react-redux";

interface IQuestionProps extends IQuestion{
    isFetching: boolean,
    uid: string,
    counter: number,
    answersResult: any,
    checkAnswerAction: (id: string, uid: string, callback: () => void) => void,
    nextQuestionAction: () => void,
}

function Question({ title, isFetching, counter, answersResult, answers, image, nextQuestionAction, checkAnswerAction, uid }: IQuestionProps) {
    const length = answers.data.length;
    const answerHandler = (id: string, uid: string) => {
        if (Object.keys(answersResult)[counter]) return false;
        if (answersResult[id] === undefined && !isFetching) {
            checkAnswerAction(id, uid, () => {
                setTimeout(() => {
                    nextQuestionAction();
                }, 1000);
            });
        }
    };
    const answersList = answers.data.map((answer, index) => {
        return <Button onClick={() => { answerHandler(answer.id, uid) }}
                       isMargin={index < length - 1}
                       isSuccess={answersResult[answer.id] === true}
                       isWrong={answersResult[answer.id] === false}
                       key={answer.id}>
            {answer.title}
        </Button>
    });
    return (
        <div className={styles.content}>
            <div className={styles.head}>
                <div className={styles.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.body}>
                <h4 className={styles.optionsTitle}>Варианты ответа:</h4>
                <div className={styles.options}>
                    { answersList }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    uid: state.page.uid,
    answersResult: state.progress.answersResult,
    counter: state.progress.counter,
    isFetching: state.progress.isFetching,
});

const mapDispatchToProps = (dispatch: any) => ({
    checkAnswerAction: (id: string, uid: string, callback: () => void) => dispatch(checkAnswer(id, uid, callback)),
    nextQuestionAction: () => dispatch(nextQuestion()),
});

const ConnectedQuestion = connect(mapStateToProps, mapDispatchToProps)(Question);
export { ConnectedQuestion as Question };
