import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomerInfo from './components/CustomerInfo'
import SongDetails from './components/SongDetails'
import ReviewOrder from './components/ReviewOrder'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    customer: {},
    song: {},
    files: []
  })

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  return (
    <div className="app">
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <CustomerInfo 
              data={formData.customer} 
              updateData={(data) => updateFormData('customer', data)} 
            />
          } />
          <Route path="/song-details" element={
            <SongDetails 
              data={formData.song} 
              updateData={(data) => updateFormData('song', data)} 
            />
          } />
          <Route path="/review" element={
            <ReviewOrder 
              formData={formData} 
            />
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App
