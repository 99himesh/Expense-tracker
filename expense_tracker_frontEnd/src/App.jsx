import { useState } from 'react'
import { Route, Routes } from 'react-router'
import SignUpPage from './component/pages/SignUpPage'

function App() {
  

  return (
    <>
    <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      
     

     
    </Routes>

     
    </>
  )
}

export default App
