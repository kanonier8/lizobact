import { AnyAction } from 'redux';
import {GET_QUIZ_ERROR, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS} from "../actions";

export interface IAnswer {
  id: string;
  title: string;
}

export interface IQuestion {
  id: string;
  title: string;
  image: string;
  answers: {
    data: IAnswer[];
  }
}

export interface IQuiz {
  data: IQuestion[],
  isFetching: boolean,
  error: boolean | string;
}

const initialState: IQuiz = {
  data: [],
  isFetching: false,
  error: false,
};

export function quizReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_QUIZ_REQUEST:
      return { ...state, isFetching: true };
    case GET_QUIZ_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };
    case GET_QUIZ_ERROR:
      return { ...state, error: action.payload, isFetching: false };
  }
  return state
}
