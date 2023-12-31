const authState = {
    isLogin: false,
}
const authReducer = (state = authState, action) => {
    switch (action.type) {
        case 'AUTH':
            return {
                ...authState,
                isLogin: action.payload
            };
            default:
                return state
    }
}

export default authReducer;