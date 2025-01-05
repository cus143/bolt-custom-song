import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SongDetails({ data, updateData }) {
  const [form, setForm] = useState(data)
  const [files, setFiles] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    const validFiles = selectedFiles.filter(file => file.size <= 70 * 1024 * 1024)
    
    if (validFiles.length !== selectedFiles.length) {
      alert('Some files exceeded the 70MB limit and were not added')
    }
    
    setFiles(prev => [...prev, ...validFiles])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateData({
      ...form,
      files
    })
    navigate('/review')
  }

  return (
    <form onSubmit={handleSubmit} className="song-form">
      <h2>Song Details</h2>
      
      <div className="form-group">
        <label>Dedication</label>
        <input
          type="text"
          name="dedication"
          placeholder="Who is this song for?"
          value={form.dedication || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Song Details</label>
        <textarea
          name="details"
          placeholder="Include all relevant information (names, events, places, special moments, etc.)"
          value={form.details || ''}
          onChange={handleChange}
          rows="6"
          required
        />
      </div>

      <div className="form-group">
        <label>Upload Files (max 70MB each)</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*,audio/*,video/*,application/pdf"
        />
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              {file.name} - {(file.size / 1024 / 1024).toFixed(2)}MB
            </div>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <button type="button" onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
        <button type="submit" className="next-button">
          Next: Review Order →
        </button>
      </div>
    </form>
  )
}

export default SongDetails
