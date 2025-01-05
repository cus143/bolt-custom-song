import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const genres = ['Pop', 'Rock', 'Jazz', 'Country', 'R&B', 'Hip-Hop', 'Classical', 'Other']
const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Memorial', 'Other']

function CustomerInfo({ data, updateData }) {
  const [form, setForm] = useState(data)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateData(form)
    navigate('/song-details')
  }

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <h2>Your Information</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Preferred Genre</label>
        <select
          name="genre"
          value={form.genre || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Genre</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        {form.genre === 'Other' && (
          <input
            type="text"
            name="customGenre"
            placeholder="Please specify genre"
            value={form.customGenre || ''}
            onChange={handleChange}
            required
          />
        )}
      </div>

      <div className="form-group">
        <label>Artist Preference</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="artist"
              value="male"
              checked={form.artist === 'male'}
              onChange={handleChange}
              required
            />
            Male Artist
          </label>
          <label>
            <input
              type="radio"
              name="artist"
              value="female"
              checked={form.artist === 'female'}
              onChange={handleChange}
            />
            Female Artist
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Occasion</label>
        <select
          name="occasion"
          value={form.occasion || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select Occasion</option>
          {occasions.map(occasion => (
            <option key={occasion} value={occasion}>{occasion}</option>
          ))}
        </select>
        {form.occasion === 'Other' && (
          <input
            type="text"
            name="customOccasion"
            placeholder="Please specify occasion"
            value={form.customOccasion || ''}
            onChange={handleChange}
            required
          />
        )}
      </div>

      <button type="submit" className="next-button">
        Next: Song Details →
      </button>
    </form>
  )
}

export default CustomerInfo
