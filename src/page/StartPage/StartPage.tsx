import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { setPage } from '../../redux/actions';
import { TPage } from '../../redux/reducers/pageReducer';
import styles from './StartPage.module.css';
import {LogoBlue} from "../../components/Logo";
import {ProductMobile, Product} from "../../components/Product";
import {ProgressTitle} from "../../components/Progress/ProgressTitle";
import ReactGA from 'react-ga';


interface IStartPageProps {
  setPageAction: any;
}
function StartPage({ setPageAction }: IStartPageProps) {
  const handleClick = () => {
      ReactGA.ga('send', 'event', 'test', 'Button_Click', 'Участвовать');
      setPageAction('quiz');
  };
  const postMessageSent = (link: string) => {
      const linkHref = 'outer__' + link;
      window.parent.postMessage(linkHref, '*');
  }
    return (
        <div className={styles.start}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.logo}>
                            <LogoBlue />
                        </div>
                        <div className={styles.product} onClick={() => { ReactGA.ga('send', 'event', 'Logo', 'Button_Click', 'Упаковка'); }}>
                            <ProductMobile />
                            <Product />
                        </div>
                        <p className={styles.conditions}>Сроки проведения конкурса с 01.03.2020 по 30.04.2020. <br/>
                            Подробная информация об организаторах конкурса, сроках, месте <br/>
                            и порядке проведения на сайте ctc.ru </p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.titleBlock}>
                            <ProgressTitle />
                        </div>
                        <h1 className={styles.title}>
                            Ответь правильно на&nbsp;5&nbsp;вопросов и получи
                            <p>Гарантированный приз!</p>
                        </h1>
                        <a className={styles.link} onClick={() => {
                            postMessageSent('https://more.tv')
                        }} href="https://more.tv" target="_blank">
                            <span>подписка</span>&nbsp;на more.tv
                        </a>
                        <div className={styles.button}>
                            <Button onClick={handleClick}>Участвовать</Button>
                        </div>
                        <p className={styles.conditions}>Сроки проведения конкурса с 01.03.2020 по 30.04.2020. <br/>
                            Подробная информация об организаторах конкурса, сроках, месте <br/>
                            и порядке проведения на сайте ctc.ru </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
  setPageAction: (page: TPage) => dispatch(setPage(page))
});

const ConnectedStartPage = connect(null, mapDispatchToProps)(StartPage);
export { ConnectedStartPage as StartPage };
