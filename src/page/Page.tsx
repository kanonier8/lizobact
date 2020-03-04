import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUid } from '../redux/actions';
import { IPage } from '../redux/reducers/pageReducer';
import styles from './Page.module.css';
import { QuizPage } from './QuizPage';
import { ResultPage } from './ResultPage';
import { StartPage } from './StartPage';

export interface IPageProps {
    setUidAction?: any;
    setPageAction?: any;
    page: IPage,
}

function Page({ setUidAction, setPageAction, page}: IPageProps) {
    let pageComponent;
    switch (page.type) {
        case 'start':
            pageComponent = <StartPage />;
            break;
        case 'result':
            pageComponent = <ResultPage />;
            break;
        case 'quiz':
            pageComponent = <QuizPage />;
            break;
    }
    useEffect(()=> {
        setUidAction();
    }, []);
    return (
        <div className={styles.page}>
            { pageComponent }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        page: state.page
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        setUidAction: () => dispatch(setUid())
    }
};

const ConnectedPage = connect(mapStateToProps , mapDispatchToProps)(Page);
export { ConnectedPage as Page };
