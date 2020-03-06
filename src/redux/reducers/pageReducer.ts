import { AnyAction } from 'redux';
import { SET_PAGE, SET_UID } from '../actions';

export type TPage = 'start' | 'quiz' | 'result';
export interface IPage {
  type: TPage,
  uid: string
}
const initialState: IPage = {
  type: 'start',
  uid: ''
};

export function pageReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, type: action.payload };
    case SET_UID:
      return { ...state, uid: action.payload };
    default:
      return state
  }
}
