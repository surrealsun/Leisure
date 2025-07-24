import React, { useEffect, useState } from 'react';
import '../styles/Success.css';

const Success = () => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [packageInfo, setPackageInfo] = useState(null);

  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem('bookingInfo'));
    const pkg = JSON.parse(localStorage.getItem('selectedPackage'));
    setBookingInfo(booking);
    setPackageInfo(pkg);

    // ✅ Clear data shortly after showing it
    const timeout = setTimeout(() => {
      localStorage.removeItem('bookingInfo');
      localStorage.removeItem('selectedPackage');
    }, 500); // half a second delay to ensure render

    return () => clearTimeout(timeout); // clean up timeout if unmounts early
  }, []);

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Booking Confirmed</h1>
        <p className="tagline">Thank you for choosing <span className="brand">Leisure</span>.</p>

        {bookingInfo && packageInfo ? (
          <div className="details">
            <img src={packageInfo.image} alt={packageInfo.title} />
            <h2>{packageInfo.title}</h2>
            <p><strong>Date:</strong> {bookingInfo.date}</p>
            <p><strong>Guests:</strong> {bookingInfo.guests}</p>
            <p><strong>Name:</strong> {bookingInfo.name}</p>
            <p><strong>Email:</strong> {bookingInfo.email}</p>
            <p className="price">
              <strong>Total:</strong> ₹
              {(Number(packageInfo.price.replace(/,/g, '')) * bookingInfo.guests).toLocaleString('en-IN')}
            </p>

          </div>
        ) : (
          <p className="missing">Booking details not available.</p>
        )}

        <button onClick={() => window.location.href = '/'} className="back-home">Back to Home</button>
      </div>
    </div>
  );
};

export default Success;
