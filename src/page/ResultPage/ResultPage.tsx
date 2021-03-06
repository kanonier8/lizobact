import React, {useState} from 'react';
import styles from './ResultPage.module.css';
import {Progress} from "../../components/Progress";
import {connect} from "react-redux";
import {Button} from "../../components/Button";
import {Product} from "../../components/Product";
import {LogoWhite} from "../../components/Logo";
import {sendEmail} from "../../redux/actions";
import ReactGA from 'react-ga';

interface IResultPageProps {
    uid: string,
    totalCount: number;
    score?: number;
    sendEmailAction?: any
}

function ResultPage({totalCount, uid, score, sendEmailAction}: IResultPageProps) {
    let title = 'Хорошая попытка!';
    let desc = 'Смотри шоу и сериалы СТС и не только!';
    const [email, setEmail] = useState('');
    const [text, setText] = useState('Отправить');
    if (score && score >= 4) {
        desc = '';
        title = 'а ты знаток!';
    }
    const sendMailHandler = () => {
        ReactGA.ga('send', 'event', 'Test', 'Button_Click', 'Отправить почту');
        if (email.length > 3 && validateEmail(email)) {
            sendEmailAction(uid, email, () => {
                setText('Промокод отправлен!');
                setTimeout(() => {
                    setText('Отправить');
                    setEmail('');
                    if (document.location) {
                        document.location.reload();
                    }
                }, 2000)
            })
        }
    };
    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const postMessageSent = (link: string) => {
        const linkHref = 'outer__' + link;
        window.parent.postMessage(linkHref, '*');
    };
    return (
        <div className={styles.result}>
            <div className={styles.container}>
                <Progress totalCount={totalCount} />
                <div className={styles.content}>
                    <div className={styles.head}>
                        <h1 className={styles.title}>{ title }</h1>
                        <article className={styles.descWrap}>
                            <p className={styles.desc}>
                                Введи почту и получи в подарок от Лизобакт промокод на&nbsp;10&nbsp;дней&nbsp;на&nbsp;<a target="_blank"
                                                                                                                         onClick={() => {
                                                                                                                             postMessageSent('https://more.tv')
                                                                                                                         }}
                                                                                                                         href="https://more.tv">more.tv</a>
                            </p>
                            { desc && <p>{desc}</p> }
                        </article>
                        <div className={styles.form}>
                            <input type="email" className={styles.input} placeholder="email" value={email} onChange={(event) => {
                                setEmail(event.target.value);
                            }}/>
                            <Button onClick={sendMailHandler}>{text}</Button>
                        </div>
                        <p className={styles.conditions}>Сроки проведения конкурса с 01.03.2020 по 30.04.2020. <br/>Подробная информация об организаторах конкурса, сроках, месте и порядке проведения на сайте ctc.ru</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.product}>
                            <Product />
                        </div>
                        <div className={styles.logo}>
                            <LogoWhite />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    score: Object.values(state.progress.answersResult).filter(item => item).length
});

const mapDispatchToProps = (dispatch: any) => ({
    sendEmailAction: (uid: string, email: string, callback: any) => dispatch(sendEmail(uid, email, callback))
});

const ConnectedResultPage = connect(mapStateToProps, mapDispatchToProps)(ResultPage);
export { ConnectedResultPage as ResultPage };
