const counterState = {
    total: 20,
    isLogin: true,
}
// below how to receive action from App.js with function
const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...counterState,
                total: action.payload,
            }
        case 'MINES': 
            return {
                ...counterState,
                total: action.payload,
            }
            default:
                return state
    }
    
    return state;
}

export default counterReducer;

