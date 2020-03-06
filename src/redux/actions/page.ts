import { TPage } from '../reducers/pageReducer';

export const SET_PAGE = 'SET_PAGE';
export const SET_UID = 'SET_UID';

export interface ISetPage {
  type: typeof SET_PAGE,
  payload: TPage
}

export interface ISetUid {
  type: typeof SET_UID,
}

export const setPage = (page: TPage): ISetPage => {
  return {
    type: SET_PAGE,
    payload: page
  }
};

export const setUid = () => {
  return (dispatch: any) => {
    fetch('https://lisobact.ctc.ru/api/quiz/init', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response =>
        dispatch({
          type: SET_UID,
          payload: response.uid,
        })
      )
  }
};

