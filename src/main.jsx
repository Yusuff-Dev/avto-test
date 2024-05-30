import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextProvider } from './context/TestContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  </AuthProvider>
)
