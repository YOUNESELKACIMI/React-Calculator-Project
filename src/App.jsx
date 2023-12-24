import { useState } from 'react'

import './styles.css'

function App() {

  const [result,setResult] = useState("")

  const handleClick = (event) => {

    setResult(result.concat(event.target.id))
  }


  const clear = () => {
    setResult("")
  }

  const removeElement = () => { 
    setResult(result.slice(0,-1))
  }

  const calculate = () => {
    try {
      let expression = result.replace(/x/g, '*'); // Replace "x" with "*"
      let expressionfiltered = expression.replace("÷", '/');
      const calculateResult = new Function('return ' + expressionfiltered);
      setResult(calculateResult().toString());
    } catch (error) {
      setResult('Error');
    }
  }
  

  return (
    <div className='calculator'>  

      <input type="text" value={result.replace(/\*/g, 'x')} class="py-5 px-4 block w-full border-gray-900 rounded-lg text-lg focus:border-blue-100 focus:ring-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-900 dark:text-black-900 dark:focus:ring-gray-900"  readOnly />

      <div className='buttons'>
      <button id='C' className='operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={clear}>C</button>
      <button id='D' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={removeElement}>D</button>
      <button  id='÷' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={handleClick}>÷</button>
      <button id='*' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={handleClick}>x</button>
      <button id='7' className='number' onClick={handleClick}>7</button>
      <button id='8' className='number' onClick={handleClick}>8</button>
      <button id='9' className='number' onClick={handleClick}>9</button>
      <button id='-' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={handleClick}>-</button>
      <button id='4' className='number' onClick={handleClick}>4</button>
      <button id='5' className='number' onClick={handleClick}>5</button>
      <button id='6' className='number' onClick={handleClick}>6</button>
      <button id='+' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={handleClick}>+</button>
      <button id='1' className='number' onClick={handleClick}>1</button>
      <button id='2' className='number' onClick={handleClick}>2</button>
      <button id='3' className='number' onClick={handleClick}>3</button>
      <button id='()' className='operator operator  rounded-full 
                      w-20 h-20  bg-gray-300 hover:bg-white text-black' onClick={handleClick}>()</button>      
      <button id='0' className='number' onClick={handleClick}>0</button>
      <button id='.' className='operator' onClick={handleClick}>.</button>
      <button id='=' className='operator col-span-2 operator  rounded-full 
                       h-20  bg-red-300 hover:bg-pink-500 text-black' onClick={calculate}>=</button>
      </div>


      
    </div>
  )
}

export default App
