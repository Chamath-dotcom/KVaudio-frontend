// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import Login from './pages/login/login';


function App() {


  return (
    <BrowserRouter>

      <Routes path='/*'>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/*' element={<h1>not found</h1>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
