import React, { Fragment, useState, useMemo } from 'react'
import ReactDOM from 'react-dom'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const App = () => {
  // 产品名称、价格
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('apple')
   // 假设有一个业务函数  获取产品的名字
   function getProductName() {
    console.log('getProductName触发')
    return name  
   }

  //  console.log(price,'price')

    const productName = useMemo(()=>{
     getProductName()
    },[name])

return (
  <Fragment>
  <p>{name}</p>
  <p>{price}</p>
  <p>{productName}</p>
  <button onClick={() => setPrice(price+1)}>价钱+1</button>
  <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
  <Button name='test'>好的</Button>
</Fragment>
)
}

const Button = ({children}) =>{
  return(
    <>
    <div>{children}</div>
    <div>"haode"</div>
    </>
  )
}

  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  