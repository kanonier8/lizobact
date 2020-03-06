import React from 'react';
import { ProgressTitle } from "./ProgressTitle";
import { ProgressLabel } from "./ProgressLabel";
import styles from './Progress.module.css';
import {ProgressItem} from "./ProgressItem";
import {connect} from "react-redux";
import {setPage} from "../../redux/actions";
import {TPage} from "../../redux/reducers/pageReducer";

interface IProgressProps {
    totalCount: number;
    counter: number;
    answersResult: any;
    page: TPage;
}

function Progress({ totalCount, answersResult, counter, page}: IProgressProps) {
    const items = [];
    answersResult = Object.values(answersResult);
    for (let i = 0; i < totalCount; i++) {
        const isActive = i === counter;
        const isCorrect = answersResult[i] === true;
        const isWrong = answersResult[i] === false;
        const isDisabled = !isActive && answersResult[i] === undefined;

        items.push(<ProgressItem
                        key={i}
                        isActive={isActive}
                        isCorrect={isCorrect}
                        isWrong={isWrong}
                        isDisabled={isDisabled}
                    />)
    }
    return (
        <div className={styles.progress}>
            <ProgressTitle />
            { page !== 'result' && <ProgressLabel counter={counter + 1}/> }
            <div className={styles.progressItemList}>
                { items }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    answersResult: state.progress.answersResult,
    counter: state.progress.counter,
    page: state.page.type,
});


const ConnectedProgress = connect(mapStateToProps)(Progress);
export { ConnectedProgress as Progress };
