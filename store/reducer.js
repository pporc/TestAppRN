import {combineReducers} from 'redux';

export const data = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.data;
    default:
      return state;
  }
};
export const reducers = combineReducers({data});
