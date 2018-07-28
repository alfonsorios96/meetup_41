'use strict';

import {combineReducers} from 'redux';
import {reducer as SessionReducer} from './session.reducer.js';

export default combineReducers({
  session: SessionReducer
});
