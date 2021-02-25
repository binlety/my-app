import React, { Fragment, useState, useMemo } from 'react'
import ReactDOM from 'react-dom'

let timer

const App = () => {
  
  const [ count, setCount ] = useState(1)

  // timer=null
  timer= setInterval(() => {
    setCount(1)
    console.log('zhixingle')
    // setCount(count+1)
  }, 500);

  const getName = () => {
    console.log('render')
    return 'test'
  }

return (
  <div>
    <span>{count}</span>
    <p>{getName()}</p>
    <img src="" onError={(e)=> {e.target.onerror = null;e.target.src='http://imgniu.zhaojiafang.com/no-img48.jpg'}} />

  </div>
  
)
}

  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  