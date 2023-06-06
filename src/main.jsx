import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
