import { combineReducers } from 'redux';

import vote from './vote-reducer';

const rootReducer = combineReducers({ vote });

export default rootReducer;
