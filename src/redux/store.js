import { createStore } from "redux";

const counterState = {
    total: 20,
    isLogin: false,
}
// below we need to make function to export the data or value
const counterReducer = (state = counterState) => {
    return state;
}

const store = createStore(counterReducer);

export default store;