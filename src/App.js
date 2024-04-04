import React, { Suspense, lazy } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './Home'
// import Login from './Login'
// import Signup from './Signup'
import About from './About'
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const Home = lazy(() => import("./Home"))
const Login = lazy(() => import("./Login"))
const Signup = lazy(() => import("./Signup"))



function App() {
  return (

    <Suspense Fallback={<img src='./../logo192.png' />}>     
    <BrowserRouter>

    <Navbar/>         
    
    <Routes>

      <Route path='/' element={ <Home/> } />

      <Route path='/login' element={ <Login/> } />

      <Route path='/signup' element={ <Signup/> } />

      <Route path='/about' element={ <About/> } />


    </Routes>


    </BrowserRouter>
    </Suspense>

  )
}

export default App
