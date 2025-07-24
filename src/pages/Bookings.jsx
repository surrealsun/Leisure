import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import allPackages from '../data/allpackages';
import '../styles/bookings.css';
import Scroll from '../components/Scroll';

const Bookings = () => {
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    date: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");

    const currentUser =
      storedUsers.find(user => user.email === loggedInEmail) || storedUsers[0];

    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name,
        email: currentUser.email
      }));
    }
  }, []);

  useEffect(() => {
    const storedPackage = JSON.parse(localStorage.getItem('selectedPackage'));
    if (storedPackage) {
      setPackageData(storedPackage);
    }
  }, []);

  const handleSelect = (pkg, region) => {
    const selected = { ...pkg, region };
    setPackageData(selected);
    localStorage.setItem('selectedPackage', JSON.stringify(selected));
  };

  const validate = (field, value) => {
    let error = '';

    if (field === 'name') {
      if (!value.trim()) error = 'Full name is required.';
      else if (!/^[A-Za-z\s]+$/.test(value)) error = 'Only letters and spaces allowed.';
    }

    if (field === 'email') {
      if (!value) error = 'Email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format.';
    }

    if (field === 'guests') {
      if (!value) error = 'Number of guests is required.';
      else if (Number(value) < 1) error = 'At least 1 guest required.';
    }

    if (field === 'date') {
      if (!value) error = 'Date is required.';
      else if (new Date(value) < new Date().setHours(0, 0, 0, 0)) error = 'Date must be in the future.';
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: validate(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('bookingInfo', JSON.stringify(formData));
      localStorage.setItem('selectedPackage', JSON.stringify(packageData));
      navigate('/payment');
    }
  };

  const handleChangeSelection = () => {
    localStorage.removeItem('selectedPackage');
    setPackageData(null);
  };

  return (
    <>
      <Scroll />
      <div className="booking-container">
        {!packageData ? (
          <div className="select-package-section">
            <h2 className="section-heading">Select a Package to Book</h2>
            {Object.entries(allPackages).map(([region, packages]) => (
              <div key={region}>
                <h3 className="region-title">{region}</h3>
                <div className="package-grid">
                  {packages.map((pkg, idx) => (
                    <div className="package-card" key={idx}>
                      <img src={pkg.image} alt={pkg.title} />
                      <div className="card-details">
                        <h4>{pkg.title}</h4>
                        <p>{pkg.description.slice(0, 100)}...</p>
                        <p className="card-price">From ₹{pkg.price.toLocaleString()}</p>
                        <button
                          className="select-btn"
                          onClick={() => handleSelect(pkg, region)}
                        >
                          Select This Journey
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="booking-header">
              <br />
              <h1>Confirm Your Journey</h1>
              <p>Reserve your luxury experience with Leisure</p>
            </div>

            <div className="booking-content">
              <div className="package-summary">
                <div className="image-wrapper">
                  <img src={packageData.image} alt={packageData.title} />
                  <button className="change-selection-btn" onClick={handleChangeSelection}>
                    Change Package
                  </button>
                </div>
                <div className="summary-details">
                  <h2>{packageData.title}</h2>
                  <p className="region">{packageData.region}</p>
                  <p>{packageData.description}</p>
                  <p className="price-highlight">Price: ₹{packageData.price.toLocaleString()} per guest</p>
                </div>
              </div>

              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Booking Details</h3>

                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </label>

                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </label>

                <label>
                  Number of Guests
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                  {errors.guests && <span className="error">{errors.guests}</span>}
                </label>

                <label>
                  Select Date
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <span className="error">{errors.date}</span>}
                </label>

                <button type="submit" className="submit-btn">Continue to Payment</button>
              </form>
            </div>
          </>
        )}
        <br /><br />
      </div>
    </>
  );
};

export default Bookings;
