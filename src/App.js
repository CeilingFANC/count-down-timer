import React, {useState} from 'react';
import './App.css';
import CountDownClock from './components/countDownClock';
function App() {
  //store the num of seconds to count down
  const [time,setTime] = useState(60);

  //used to reset counter, 
  //different key will let react get new instance for countdownclock
  const [num, setNum] =useState(0);
  // event handler
  const changeHandler = e => setTime(e.target.value);
  const reset = () => setNum(num => num + 1);
  return (
    <div className="counter">
      <CountDownClock key={num} initTime={time} />
      <input 
        type="number"
        value={time}
        min={0}
        max={3600}
        onChange={changeHandler}
      />
      <button onClick={reset}>
        Reset Counter
      </button>
    </div>
  );
}

export default App;
