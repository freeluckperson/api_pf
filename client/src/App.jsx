import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPages } from './views/index.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPages />}/>
          <Route path='/task' element={<h1>task</h1>}/>
          <Route path='/add-task' element={<h1>add-task</h1>}/>
          <Route path='/task/:id' element={<h1>task</h1>}/>
          <Route path='/profile' element={<h1>profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
