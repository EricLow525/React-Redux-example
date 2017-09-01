import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

//import * as actions from './actions';

// console.log(store.getState());
// const unsubscribe = store.subscribe( () => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([100,100,100]));
//
// unsubscribe();
//
// //does not work the next dispatch
//
// store.dispatch(actions.setColor([200,100,200]));

ReactDOM.render(
  <Provider store={store}>
       <App/>
  </Provider>,
  document.getElementById('root')
);
