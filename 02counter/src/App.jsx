import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    if(counter < 20 ){
      setCounter(counter+= 1)
     console.log("clicked", counter);
    } else{
      return 0;
    }
  
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1 );
      console.log("clicked:", counter)
    } else {
      return 0;
    }
  }

  
  return (
    <>
      <h1> React Project </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br/>
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
