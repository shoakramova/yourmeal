import './App.css'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <>
    <Provider store={ store }>
        <Outlet />
    </Provider>
    </>
  )
}

export default App
