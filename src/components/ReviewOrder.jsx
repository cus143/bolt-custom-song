import { useNavigate } from 'react-router-dom'

function ReviewOrder({ formData }) {
  const navigate = useNavigate()

  const handleSubmit = () => {
    // Implement submission logic
    console.log('Submitting order:', formData)
    alert('Order submitted successfully!')
  }

  return (
    <div className="review-order">
      <h2>Review Your Order</h2>
      
      <div className="order-section">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> {formData.customer.name}</p>
        <p><strong>Email:</strong> {formData.customer.email}</p>
        <p><strong>Genre:</strong> {formData.customer.genre}</p>
        <p><strong>Artist:</strong> {formData.customer.artist}</p>
        <p><strong>Occasion:</strong> {formData.customer.occasion}</p>
      </div>

      <div className="order-section">
        <h3>Song Details</h3>
        <p><strong>Dedication:</strong> {formData.song.dedication}</p>
        <p><strong>Details:</strong> {formData.song.details}</p>
        {formData.song.files && formData.song.files.length > 0 && (
          <div className="files-section">
            <h4>Uploaded Files:</h4>
            <ul>
              {formData.song.files.map((file, index) => (
                <li key={index}>{file.name} - {(file.size / 1024 / 1024).toFixed(2)}MB</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="button" onClick={() => navigate('/song-details')} className="back-button">
          ← Back
        </button>
        <button type="button" onClick={handleSubmit} className="submit-button">
          Submit Order
        </button>
      </div>
    </div>
  )
}

export default ReviewOrder
