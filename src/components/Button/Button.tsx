import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface IButtonProps{
    isSuccess?: boolean;
    isWrong?: boolean;
    isMargin?: boolean;
    children: string;
    onClick?: () => void;
}

export function Button({ children, isWrong, isSuccess, isMargin, onClick }: IButtonProps) {
    const classes = classNames(
        styles.button,
        {
            [styles.buttonSuccess]: isSuccess,
            [styles.buttonWrong]: isWrong,
            [styles.buttonMargin]: isMargin,
        },
    );
    return (
        <button className={classes} onClick={onClick}>
            { children }
        </button>
    )
}
