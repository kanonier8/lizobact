export const CHECK_ANSWER_REQUEST = 'CHECK_ANSWER_REQUEST';
export const CHECK_ANSWER_SUCCESS = 'CHECK_ANSWER_SUCCESS';
export const CHECK_ANSWER_ERROR = 'CHECK_ANSWER_ERROR';
export const NEXT_QUESTION = 'NEXT_QUESTION';


export function checkAnswer(id: string, uid: string, callback: () => void) {
  return (dispatch: any) => {
    dispatch({
        type: CHECK_ANSWER_REQUEST
    });
    const urlencoded = new URLSearchParams();
    urlencoded.append('id', id);
    fetch('https://lisobact.ctc.ru/api/quiz/check', {
      method: 'POST',
      headers: { 'uid': uid },
      body: urlencoded,
    })
      .then(response => response.json())
      .then(response => {
              const isCorrect = response.correct === 1;
              callback();
              return dispatch({
                  type: CHECK_ANSWER_SUCCESS,
                  payload: {[id]: isCorrect}
              });
          }
      )
      .catch(error =>
        dispatch({
          type: CHECK_ANSWER_ERROR,
          payload: error,
          error: true
        })
      )
  }
}

export function nextQuestion() {
    return {
        type: NEXT_QUESTION
    }
}
