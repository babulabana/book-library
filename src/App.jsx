import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'
import { Route, Routes } from 'react-router'

import Menu from './components/Menu'
import Login from './components/Login'
import About from './components/About'
import Services from './components/Services'
import Categories from './components/Categories'
import Showbooks from './components/Showbooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu></Menu>
    <Routes>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/About' element={<About></About>}></Route>
         <Route path='/services' element={<Services></Services>}></Route>
         <Route path='/' element={<Categories></Categories>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
         <Route path='/showbooks/:category' element={<Showbooks></Showbooks>}></Route>
    </Routes>
    </>
  )
}

export default App
