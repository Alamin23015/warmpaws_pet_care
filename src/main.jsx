import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx' // We will create this next
import AuthProvider from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast' // For all toasts

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster /> {/* Add Toaster here for app-wide notifications */}
    </AuthProvider>
  </React.StrictMode>,
)