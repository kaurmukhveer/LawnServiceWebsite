import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    navigate("/confirmation");
  };

  return (
    <div className="form-page">
      <h1>Book Lawn Aeration</h1>

      <p className="form-description">
        Please provide your details to schedule service.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="(613) 555-1234"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Preferred Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <p className="privacy-note">
          We only collect information required to schedule service.
        </p>

        <button type="submit">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;