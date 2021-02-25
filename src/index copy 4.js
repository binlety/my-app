import React, { useState, useMemo } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [name, setName] = useState('名称')
  const [content, setContent] = useState('内容')
return (
  <>
   <button onClick={()=>setName(new Date().getTime())}>{name}</button>
   <button onClick={()=>setContent(new Date().getTime())}>{content}</button>
   <Button name={name}>{name}</Button>
  </>
)
}

const Button = ({name, children}) =>{
  function changeName(name){
    console.log('zhixingle')
    return name + '改变name的方法'
  }

  // const otherName = changeName(name)
  const otherName = useMemo(()=>{
    changeName(name)
  },[name])

  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  )
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  