import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-[#0e0e10] text-white flex items-center justify-center font-sans">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
