import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  const myArr = [1,34,5];
  const myObj = {
    age: 10,
    post: 'operations'
  }
  return (
    <>
      <h2>hello world</h2>
      <Card username="veboman" obj={{post: "devops"}} arr={myArr} />
      <Card username="viabhav" obj={myObj}/>
      
      
    </>
  )
}

export default App
