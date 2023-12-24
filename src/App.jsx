import { useEffect, useState } from 'react'


function App() {
  const [time, setTime] = useState(0);
  const [running , setRunning] = useState(false);

  useEffect( ()=>{
    let interval;
    if (running) {
      interval = setInterval( ()=>{
        setTime((prevtime) => prevtime + 10);
      } , 10)
    } else if(!running){
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);
  } , [running]);
  

  return (
    <div className='bg-fuchsia-300 w-[300px] h-[250px] flex flex-col items-center justify-center rounded-xl '>
      <h1 className='font-bold' >StopWatch</h1>
      <div className='font-semibold m-5'>
        <span> {("0" + Math.floor((time / 60000) % 60 )).slice(-2)} :</span>
        <span> {("0" + Math.floor((time / 1000) % 60 )).slice(-2)} :</span>
        <span> {("0" + ((time / 10) % 100 )).slice(-2)}</span>
      </div>

      <div className='flex flex-row h-[40px] font-normal  cursor-pointer'>
        {running 
        ? (
        <button
        className='bg-pink-200 rounded-lg hover:font-medium w-[60px] m-1' 
        onClick={() =>{setRunning(false)}}>Stop</button>) 
        : (
        <button 
        className='bg-pink-200 rounded-lg hover:font-medium w-[60px] m-1'
        onClick={() =>{setRunning(true)}}>Start</button>)}
        
        
        <button 
        className='bg-pink-200 rounded-lg  hover:font-medium w-[60px] m-1'
        onClick={() =>{setTime(0)}}>Reset</button>
      </div>
    </div>
  )
}

export default App;
