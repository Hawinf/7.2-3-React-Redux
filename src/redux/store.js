import { createStore } from "redux";
import counterReducer from '../redux/reducers/counterReducer.js'

const store = createStore(counterReducer);

export default store;