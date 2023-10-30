import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './views/Home'
import Menu from './views/Menu'

import Login from './components/Login'
import Layout from './layout/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/Register'
import EditProfile from './components/EditProfile'
import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/edit-profile' element={<EditProfile />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
