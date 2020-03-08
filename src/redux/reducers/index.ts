import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { progressReducer } from './progressReducer';
import { quizReducer } from './quizReducer';
import { resultReducer } from './resultReducer';

export const rootReducer = combineReducers({
  page: pageReducer,
  result: resultReducer,
  quiz: quizReducer,
  progress: progressReducer
});
