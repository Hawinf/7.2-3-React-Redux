import { useSelector, useDispatch } from 'react-redux';
// import Result from './components/results';
import { handleMines, handlePlus } from './redux/actions/counterAction';

function App() {
  
  const dispatch = useDispatch();
  const { total } = useSelector((rootReducer) => rootReducer.counterReducer);
  const {isLogin} = useSelector((counterState) => counterState.counterReducer)
  console.log(isLogin)

  const handlePlus = () => {
    const newTotal = total  + 1;
 
    dispatch({
     type: 'ADD',
     payload: newTotal,
    })
   }

const handleMines = () => {
     const newTotal = total - 1;
 
     dispatch({
       type: 'MINES',
       payload: newTotal,
     })
   }

  return (
    <div className="App">
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMines}>-</button>
      <h1>{total}</h1>
      {/* <Result /> */}
      {
        isLogin ? (
          <>
            <p>Already Log In</p>
          </> ) : (
            <>
              <p>Please Log in</p>
            </>
          )
      }
    </div>
  );
}

export default App;
