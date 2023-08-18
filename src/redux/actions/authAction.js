const handleAuth = (isLogin) => (dispatch) => {
    let newLogin = isLogin ? false : true;
    // let newIsLogin = !isLogin;

    dispatch({
        type: "AUTH",
        payload: 'newIsLogin',
    })
};

export default handleAuth;