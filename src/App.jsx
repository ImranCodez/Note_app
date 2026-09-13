import React from 'react'
import app from './Firebase.confige'
import Register from './Register'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <Register/>
     <ToastContainer />
    </>
  )
}

export default App 