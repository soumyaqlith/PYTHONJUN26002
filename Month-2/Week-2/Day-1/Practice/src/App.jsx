
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import Service from './Service'
import NotFound from './NotFound'
import Admin from './Admin'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

      <Route path="/admin" element={<Admin/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="profile/:userId" element={<Profile/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
