
import Login from './components/Logix'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1>React with chay</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
