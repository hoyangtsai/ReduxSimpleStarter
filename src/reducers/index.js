import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActivedBook from './reducer_actived_book';

const rootReducer = combineReducers({
  books: BookReducer,
  activedBook: ActivedBook
});

export default rootReducer;
