import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Result from './components/results';

function App() {
  const [num, setNum] = useState(0)

  const handlePlus = () => {
    setNum((prevState) => prevState + 1)
  }
  const handleMines = () => {
    setNum((prevState) => prevState - 1)
  }

  // How to receive data from redux aka store
  const { total } = useSelector((counterStore) => counterStore);
  console.log(total)

  return (
    <div className="App">
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMines}>-</button>
      <h1>{num}</h1>
      <Result />
    </div>
  );
}

export default App;
