import React from 'react';
import styles from './ProgressLabel.module.css';

interface IProgressLabel {
    counter: number;
}

export function ProgressLabel({ counter = 1 }: IProgressLabel) {
    return (
        <div className={styles.label}>Вопрос&nbsp;{counter}</div>
    )
}
