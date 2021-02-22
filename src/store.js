import { createStore } from 'redux';
import { composeWithDevTools } from 'rex-devtools-extension';


const store = createStore(reducer, composeWithDevTools);

export default store;
