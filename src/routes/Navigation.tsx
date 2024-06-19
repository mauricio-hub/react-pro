import React from 'react'
import { BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import { Routes,Route,Link } from 'react-router-dom'
import logo from '../logo.svg'
import ShoppingPage from '../components-patterns/pages/ShoppingPage'
export const Navigation = () => {
  return (
    <BrowserRouter>
     <div className='main-layout'>
     <nav>
      <img src={logo} alt="react logo" />
        <ul>
          <li>
            <NavLink  className={({isActive})=>isActive ? 'nav-active' : ''} to="/home" >Shopping</NavLink>
          </li>
          <li>
            <NavLink  className={({isActive})=>isActive ? 'nav-active' : ''} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink  className={({isActive})=>isActive ? 'nav-active' : ''} to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<h1>About page</h1>} />
        <Route path="/users" element={<h1>Users page</h1>} />
        <Route path="home" Component={ShoppingPage}  />
        <Route path="/*" element={<Navigate to='/home' />} />

        
      </Routes>

     </div>
      

    </BrowserRouter>
  )
}
