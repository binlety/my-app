import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  // useEffect(()=>{
  //         console.log(count);    //第一次结果0，第二次结果1，第三次结果2，第四次结果3，第五次结果4
  //         // console.log(sum+count);//第一次结果0，第二次结果1，第三次结果3，第四次结果6，第五次结果10
  //         setSum(sum+count);
  // },[count])
  console.log(count)

  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
              Click me
          </button>
      </div>
  );
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  