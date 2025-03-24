import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <UserContextProvider>
      <h1>React with state management</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
