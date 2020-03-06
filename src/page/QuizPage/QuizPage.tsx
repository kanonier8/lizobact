import React, {useEffect} from 'react';
import styles from './QuizPage.module.css';
import {getQuiz, setPage} from "../../redux/actions";
import {IQuestion} from "../../redux/reducers/quizReducer";
import {connect} from "react-redux";
import {Progress} from "../../components/Progress";
import {Question} from "../../components/Question";
import {Preloader} from "../../components/Preloader/Preloader";
import {TPage} from "../../redux/reducers/pageReducer";

interface IQuizPageProps {
    uid: string;
    data: IQuestion[],
    isFetching: boolean;
    getQuizAction: any;
    counter: number;
    setPageAction: (page: TPage) => void;
}

function QuizPage({ uid, counter, data, isFetching, setPageAction, getQuizAction }: IQuizPageProps) {
    useEffect(() => {
        getQuizAction(uid);
    }, []);

    if (isFetching) {
        return (
            <div className={styles.quiz}>
                <Preloader/>
            </div>
        )
    } else  if (counter >= data.length && data.length > 0) {
        setPageAction('result');
        return null;
    }
    return (
        <div className={styles.quiz}>
            <div className={styles.container}>
                <Progress totalCount={data.length} />
                { data[counter] && <Question {...data[counter]} /> }
            </div>
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    data: state.quiz.data,
    isFetching: state.quiz.isFetching,
    counter: state.progress.counter,
});


const mapDispatchToProps = (dispatch: any) => ({
    getQuizAction: (uid: string) => dispatch(getQuiz(uid)),
    setPageAction: (page: TPage) => dispatch(setPage(page)),
});

const ConnectedQuizPage = connect(mapStateToProps, mapDispatchToProps)(QuizPage);
export { ConnectedQuizPage as QuizPage }
