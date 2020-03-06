import { AnyAction } from 'redux';
import {CHECK_ANSWER_ERROR, CHECK_ANSWER_REQUEST, CHECK_ANSWER_SUCCESS, NEXT_QUESTION} from "../actions";

export interface IProgress {
  answersResult: any;
  counter: number;
  isFetching: boolean;
  error: boolean | string;
}

const initialState = {
  answersResult: {},
  counter: 0,
  isFetching: false,
  error: false
};


export function progressReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CHECK_ANSWER_REQUEST:
      return { ...state, isFetching: true };
    case CHECK_ANSWER_SUCCESS:
      return { ...state, answersResult: { ...state.answersResult, ...action.payload }, isFetching: false };
    case CHECK_ANSWER_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    case NEXT_QUESTION:
      return { ...state, counter: state.counter + 1 };
  }
  return state;
}
