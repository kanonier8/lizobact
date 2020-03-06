export const GET_QUIZ_REQUEST = 'GET_QUIZ_REQUEST';
export const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS';
export const GET_QUIZ_ERROR = 'GET_QUIZ_ERROR';

export function getQuiz(uid: string) {
  return (dispatch: any) => {

    dispatch({
      type: GET_QUIZ_REQUEST
    });

    fetch('https://lisobact.ctc.ru/api/quiz/questions', {
      method: 'GET',
      headers: { 'uid': uid },
    })
      .then(response => response.json())
      .then(response =>
        dispatch({
          type: GET_QUIZ_SUCCESS,
          payload: response.data,
        })
      )
      .catch(error => {
        dispatch({
          type: GET_QUIZ_ERROR,
          payload: error,
          error: true
        });
      });

  }

}


