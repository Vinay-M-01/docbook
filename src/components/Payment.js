import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ loading, setLoading, setIsPaymentPending }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState(1000);
  const [errors, setErrors] = useState({});

  const validateCardNumber = (number) => {
    const formattedNumber = number.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
    return formattedNumber;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (cardName.trim() === '') {
      newErrors.cardName = 'Card holder\'s name is required';
    }
    if (!expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    if (amount <= 0) {
      newErrors.amount = 'Amount must be greater than zero';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true)
      setTimeout(() => {
        setIsPaymentPending(false)
        setLoading(false)
      }, 5000)
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(validateCardNumber(e.target.value))}
            placeholder="1234-5678-9123-4567"
            required
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Card Holder's Name</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter card holder's name"
            required
          />
          {errors.cardName && <span className="error">{errors.cardName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="month" min="2024-05"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YYYY"
            required
          />
          {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Enter CVV"
            required
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (INR)</label>
          <input
            type="number"
            id="amount"
            value={1000}
            placeholder="Enter amount"
            required
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
