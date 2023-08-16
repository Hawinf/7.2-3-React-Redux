import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Result from './components/results';

function App() {
  // useSelector is only for receiving value or data
  const dispatch = useDispatch();
  const { total } = useSelector((counterStore) => counterStore);
  console.log(total)

  // below action for dispatch(export) the case to redux(redux store ready to received the action below)
  const handlePlus = () => {
   const newTotal = total + 1;

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
      <Result />
    </div>
  );
}

export default App;
