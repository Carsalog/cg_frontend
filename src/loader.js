import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Cookies from 'universal-cookie';


// Create cookie object
const cookies = new Cookies();

const store = createStore(
  reducers, 
  applyMiddleware(
    ReduxThunk
  ),
);

export {store, cookies};