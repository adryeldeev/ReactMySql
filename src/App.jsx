import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Create from './Create'
import Ler from './Ler'
import Edit from './Edit'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/ler/:id' element={<Ler/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
