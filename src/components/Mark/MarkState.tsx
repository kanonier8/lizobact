import React from 'react';
import styles from './MarkState.module.css'
import classNames from 'classnames';

export function MarkState({ page }: any) {
    const classes = classNames(styles.state, styles[page]);
    return(
        <p className={classes}>РУ П №014179/01 – 2002 от 06.05.2008.</p>
    )
}
