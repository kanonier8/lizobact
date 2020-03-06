import { AnyAction } from 'redux';
import {SEND_EMAIL_ERROR, SEND_EMAIL_REQUEST, SEND_EMAIL_SUCCESS} from "../actions";

export interface IResult {
  title: string,
  score: number,
  subscribeStatus: string,
  error: string | boolean,
}

const initialState: IResult = {
  title: 'Some title',
  score: 0,
  subscribeStatus: '',
  error: false,
};

export function resultReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEND_EMAIL_REQUEST:
      return { ...state, isFetching: true };
    case SEND_EMAIL_SUCCESS:
      return { ...state, isFetching: false, subscribeStatus: action.payload };
    case SEND_EMAIL_ERROR:
      return { ...state, isFetching: false, error: action.payload };
  }
  return state
}
