import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { setPage } from '../../redux/actions';
import { TPage } from '../../redux/reducers/pageReducer';
import styles from './StartPage.module.css';


interface IStartPageProps {
  setPageAction: any;
}
function StartPage({ setPageAction }: IStartPageProps) {
  const handleClick = () => {
    console.log('setPageAction', setPageAction)
    setPageAction('quiz');
  };
    return (
        <div className={styles.start}>
            <div className={styles.container}>
              <Button onClick={handleClick}> Участвовать </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
  setPageAction: (page: TPage) => dispatch(setPage(page))
});

const ConnectedStartPage = connect(null, mapDispatchToProps)(StartPage);
export { ConnectedStartPage as StartPage };
