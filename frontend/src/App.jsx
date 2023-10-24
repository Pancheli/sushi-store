import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/Login'
import Home from './views/Home'
import Layout from './layout/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/Register'
import './App.css'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/edit-profile' element={<EditProfile />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
