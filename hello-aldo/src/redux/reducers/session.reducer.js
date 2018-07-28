'use strict';

const SessionReducer = (state = {isLogged: false}, action) => {
  switch (action.type) {
    case "CHANGE_LOGGED":
      return Object.assign({}, state, {
        isLogged: action.logged
      });
    default :
      return state;
  }
};
