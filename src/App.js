import { useSelector, useDispatch } from 'react-redux';
// import Result from './components/results';
import handleAuth from './redux/actions/authAction';
import { handleMines, handlePlus } from './redux/actions/counterAction';
import rootReducer from './redux/reducers';

function App() {
  
  const dispatch = useDispatch();
  // DRY DONT REPEAT YOURSELF
  // const { total } = useSelector((rootReducer) => rootReducer.counterReducer);
  // const {isLogin} = useSelector((counterState) => counterState.authReducer)
  
  // Instead Of DRY We can use Below Code by call all of them
  const {authReducer, counterReducer} = useSelector(rootReducer=> rootReducer)
  console.log(authReducer, counterReducer)

  // Function below to recall function from action with redux thunk middleware
  const onAdd = () => {
    dispatch(handlePlus(counterReducer))
  };
  const onMin = () => {
    dispatch(handleMines(counterReducer))
  };
  const onLogin = () => {
    dispatch(handleAuth(authReducer.isLogin))
  }

  return (
    <div className="App">
      <button onClick={onAdd}>+</button>
      <button onClick={onMin}>-</button>
      <h1>{counterReducer.total}</h1>
      {/* <Result /> */}
      {/* {
        authReducer.isLogin ? (
          <>
            <p>Already Log In</p>
          </> ) : (
            <>
              <p>Please Log in</p>
            </>
          )
      } */}
      {/* <button>
        {
          authReducer.isLogin ? 'log out' : 'log in'
        }
      </button> */}
      <button onClick={onLogin}>{authReducer.isLogin ? 'log out' : 'log in'}</button>
    </div>
  );
}

export default App;
