'use strict';

const store = Redux.createStore(reducer);
// Export the ReduxMixin
const ReduxMixin = PolymerRedux(store);

