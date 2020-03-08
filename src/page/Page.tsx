import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUid } from '../redux/actions';
import { IPage } from '../redux/reducers/pageReducer';
import styles from './Page.module.css';
import { QuizPage } from './QuizPage';
import { ResultPage } from './ResultPage';
import { StartPage } from './StartPage';
import { MarkState, MarkAlert } from '../components/Mark';

export interface IPageProps {
    totalCount: number;
    setUidAction?: any;
    setPageAction?: any;
    page: IPage,
}

function Page({ setUidAction, totalCount, page}: IPageProps) {
    let pageComponent;
    switch (page.type) {
        case 'start':
            pageComponent = <StartPage />;
            break;
        case 'result':
            pageComponent = <ResultPage uid={page.uid} totalCount={totalCount} />;
            break;
        case 'quiz':
            pageComponent = <QuizPage uid={page.uid} />;
            break;
    }
    useEffect(()=> {
        setUidAction();
    }, []);
    return (
        <div className={styles.page}>
            { pageComponent }
            <MarkState page={page.type} />
            <MarkAlert />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        page: state.page,
        totalCount: state.quiz.data.length,
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        setUidAction: () => dispatch(setUid())
    }
};

const ConnectedPage = connect(mapStateToProps , mapDispatchToProps)(Page);
export { ConnectedPage as Page };
