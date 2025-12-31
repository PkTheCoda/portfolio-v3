import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next"




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            index
            element={<Homepage />}
          />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
