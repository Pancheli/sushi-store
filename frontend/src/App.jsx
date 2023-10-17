import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/Login'
import Home from './views/Home'
import Layout from './layout/Layout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
