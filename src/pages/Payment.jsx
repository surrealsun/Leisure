import React, { useEffect, useState } from 'react';
import '../styles/Payments.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [packageInfo, setPackageInfo] = useState(null);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
    wallet: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem('bookingInfo'));
    const pkg = JSON.parse(localStorage.getItem('selectedPackage'));
    setBookingInfo(booking);
    setPackageInfo(pkg);
  }, []);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'cardName':
        if (!value.trim()) error = 'Cardholder name is required.';
        break;
      case 'cardNumber':
        if (!/^\d{16}$/.test(value)) error = 'Card number must be 16 digits.';
        break;
      case 'expiry':
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) error = 'Expiry must be in MM/YY format.';
        break;
      case 'cvv':
        if (!/^\d{3,4}$/.test(value)) error = 'CVV must be 3 or 4 digits.';
        break;
      case 'upiId':
        if (!/^[\w.\-]+@[\w]+$/.test(value)) error = 'Enter a valid UPI ID.';
        break;
      case 'wallet':
        if (!value) error = 'Please select a wallet.';
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const isFormValid = () => {
    const fieldsToValidate = paymentMethod === 'card'
      ? ['cardName', 'cardNumber', 'expiry', 'cvv']
      : paymentMethod === 'upi'
      ? ['upiId']
      : ['wallet'];

    let valid = true;
    fieldsToValidate.forEach(field => {
      validateField(field, paymentDetails[field]);
      if (paymentDetails[field] === '' || errors[field]) valid = false;
    });

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(`Payment successful via ${paymentMethod.toUpperCase()}! Thank you for booking with Leisure.`);
      navigate('/success');
    } else {
      alert('Please correct the errors before proceeding.');
    }
  };

  if (!bookingInfo || !packageInfo)
    return <div className="payment-container">Missing booking info.</div>;

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>Complete Your Journey</h1>
        <p>Enter your payment details to confirm the experience</p>
      </div>

      <div className="payment-content">
        <div className="booking-summary">
          <h2>{packageInfo.title}</h2>
          <img src={packageInfo.image} alt={packageInfo.title} />
          <p><strong>Date:</strong> {bookingInfo.date}</p>
          <p><strong>Guests:</strong> {bookingInfo.guests}</p>
          <p><strong>Name:</strong> {bookingInfo.name}</p>
          <p><strong>Email:</strong> {bookingInfo.email}</p>
          <p className="total-price">
            <strong>Total Price:</strong> ₹
            {(Number(packageInfo.price.replace(/,/g, '')) * bookingInfo.guests).toLocaleString('en-IN')}
          </p>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="method-switch">
            <button type="button" className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>Card</button>
            <button type="button" className={`method-btn ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>UPI</button>
            <button type="button" className={`method-btn ${paymentMethod === 'wallet' ? 'active' : ''}`} onClick={() => setPaymentMethod('wallet')}>Wallet</button>
          </div>

          {paymentMethod === 'card' && (
            <>
              <h3>Payment Information</h3>
              <label>
                Cardholder Name
                <input type="text" name="cardName" value={paymentDetails.cardName} onChange={handleChange} />
                {errors.cardName && <span className="error">{errors.cardName}</span>}
              </label>
              <label>
                Card Number
                <input type="text" name="cardNumber" maxLength="16" value={paymentDetails.cardNumber} onChange={handleChange} />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </label>
              <div className="row">
                <label>
                  Expiry Date
                  <input type="text" name="expiry" placeholder="MM/YY" maxLength="5" value={paymentDetails.expiry} onChange={handleChange} />
                  {errors.expiry && <span className="error">{errors.expiry}</span>}
                </label>
                <label>
                  CVV
                  <input type="text" name="cvv" maxLength="4" value={paymentDetails.cvv} onChange={handleChange} />
                  {errors.cvv && <span className="error">{errors.cvv}</span>}
                </label>
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <div className="upi-section">
              <h3>UPI Payment</h3>
              <label>
                UPI ID
                <input type="text" name="upiId" placeholder="yourname@upi" value={paymentDetails.upiId} onChange={handleChange} />
                {errors.upiId && <span className="error">{errors.upiId}</span>}
              </label>
            </div>
          )}

          {paymentMethod === 'wallet' && (
            <div className="wallet-section">
              <h3>Wallet Payment</h3>
              <label>
                Select Wallet
                <select name="wallet" value={paymentDetails.wallet} onChange={handleChange}>
                  <option value="">--Choose Wallet--</option>
                  <option value="Paytm">Paytm</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="GooglePay">Google Pay</option>
                </select>
                {errors.wallet && <span className="error">{errors.wallet}</span>}
              </label>
            </div>
          )}

          <button className="pay-btn" type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
