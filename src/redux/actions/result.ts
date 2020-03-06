import {GET_QUIZ_ERROR, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS} from "./quiz";

export const SET_RESULT = 'SET_RESULT';
export const SEND_EMAIL_REQUEST = 'SEND_EMAIL_REQUEST';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR';

export interface ISetResult {
  type: typeof SET_RESULT,
  payload: string
}

export function setResult(text: string): ISetResult {
  return {
    type: SET_RESULT,
    payload: text
  }
}


export function sendEmail(uid: string, email: string) {
  return (dispatch: any) => {

    dispatch({
      type: SEND_EMAIL_REQUEST
    });
  const urlencoded = new URLSearchParams();
  urlencoded.append('email', email);
    fetch('https://lisobact.ctc.ru/api/quiz/send', {
      method: 'POST',
      headers: { 'uid': uid },
      mode: 'no-cors',
      body: urlencoded,
    })
        .then(response => response.json())
        .then(response =>
            dispatch({
              type: SEND_EMAIL_SUCCESS,
              payload: response.data,
            })
        )
        .catch(error => {
          dispatch({
            type: SEND_EMAIL_ERROR,
            payload: error,
            error: true
          });
        });

  }

}
