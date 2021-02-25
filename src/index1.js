import React,{ useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const lists=[
  {value:1,name:1},
  {value:2,name:2},
  {value:3,name:3},
  {value:4,name:4}
]
function Example(){
  const [count, setCount]= useState(0)
  const [list, setList]= useState(lists)
  const [newKey,setNewKey] = useState(0)
  
  useEffect(()=>{
    document.title=` You clicked ${count} times`
  })

  const change =()=>{
    // const arr=list
    // const arr=[...list]
    list[0].name='changed'
    // list.push({value:Math.random(),name:Math.random()})
    // setNewKey(newKey+1)
    setList(list)

  }

  const batchChange = () =>{
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    lists.push({value:Math.random(),name:Math.random()})
    setList(lists)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={batchChange}>
        Click me
      </button>
      
      <select>
        {list.map(function(item){
          return  <option value={item.value} key={item.value}>{item.name}</option>
        })}
      </select>
      <button onClick={() =>change()}>
        Click me
      </button>
    </div>
  )
}
  
  
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );
  