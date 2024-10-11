
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Login from './component/login.jsx';
import Home from './component/home.jsx';
import Mycart from './component/mycart.jsx';
import CreateAccount from './component/createaccount.jsx';
import AdminLogin from './component/adminlogin.jsx';
import Admin from './component/Admin.jsx';
import { useState,createContext } from 'react';

export const UserContext=createContext(null);


function App() {
      const [user,setUser]=useState(false);

  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Mycart' element = {<Mycart/>}/>
        <Route path='/CreateAccount' element = {<CreateAccount/>}/>
        <Route path='/Adminlogin' element = {<AdminLogin/>}/>
        <Route path='/Admin' element = {<Admin/>}/>
        <Route path='*' element={<h1>Sorry,the page does not exist</h1>}/>
      </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
