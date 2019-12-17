import { combineReducers } from 'redux';
import articleReducer from '../modules/Article/articleReducer';

export default combineReducers({
  article: articleReducer
});
