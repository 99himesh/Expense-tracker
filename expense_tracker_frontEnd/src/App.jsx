import { useState } from 'react'
import { Route, Routes } from 'react-router'
import SignUpPage from './component/pages/SignUpPage'
import LoginPage from './component/pages/loginPage'

function App() {
  

  return (
    <>
    <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      
     

     
    </Routes>

     
    </>
  )
}

export default App
