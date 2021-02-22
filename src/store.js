import { createStore } from 'redux';
import { composeWithDevTools } from 'rex-devtools-extension';
import reducer from './reducer/gitUserReducer';


const store = createStore(reducer, composeWithDevTools);

export default store;
