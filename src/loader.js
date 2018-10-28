import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Cookies from 'universal-cookie';


// Create cookie object
const cookies = new Cookies();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      ReduxThunk
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export {store, cookies};