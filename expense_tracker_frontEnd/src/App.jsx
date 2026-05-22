import { useState } from 'react'
import { Route, Routes } from 'react-router'
import SignUpPage from './component/pages/SignUpPage'
import LoginPage from './component/pages/loginPage'
import ExpensePage from './component/pages/ExpensePage'

function App() {
  

  return (
    <>
    <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/expense" element={<ExpensePage />} />     
      </Routes>

     
    </>
  )
}

export default App
