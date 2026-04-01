
import React from 'react'
import Header from './header/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import './App.css'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App