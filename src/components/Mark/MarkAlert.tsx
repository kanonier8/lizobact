import React from 'react';
import styles from './MarkAlert.module.css'

export function MarkAlert() {
    return(
        <p className={styles.alert}>Имеются противопоказания, необходимо <br/>
            проконсультироваться со специалистом.</p>
    )
}
