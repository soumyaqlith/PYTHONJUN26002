
import { Route, Routes } from 'react-router'
import './App.css'
import RegisterForm from './RegisterForm'
import Home from './component/Home'
import Service from './component/Service'
import Contact from './component/Contact'
import NotFound from './component/NotFound'
import Navbar from './component/Navbar'
import Dashboard from "./component/Dashboard"
import Profile from "./component/Profile"
import Profile2 from "./component/Profile2"

function App() {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<RegisterForm/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

      <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<Profile/>}></Route>
        <Route path="profile-2/:id" element={<Profile2/>}></Route>
      </Route>

      <Route path='*' element={<NotFound/>}></Route>
      
    </Routes>

    {/* <RegisterForm/> */}
    </>
  )
}

export default App
