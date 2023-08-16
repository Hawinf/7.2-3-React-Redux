import { useSelector, useDispatch } from 'react-redux';
// import Result from './components/results';
import { handleMines, handlePlus } from './redux/actions/counterAction';

function App() {
  
  const dispatch = useDispatch();
  const { total } = useSelector((rootReducer) => rootReducer.counterReducer);

  return (
    <div className="App">
      <button onClick={dispatch(handlePlus(total))}>+</button>
      <button onClick={dispatch(handleMines(total))}>-</button>
      <h1>{total}</h1>
      {/* <Result /> */}
    </div>
  );
}

export default App;
