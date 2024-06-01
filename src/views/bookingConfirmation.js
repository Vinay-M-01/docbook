import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './bookingConfirmation.css';
import Payment from '../components/Payment';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';

const BookingConfirmation = () => {
  const [user, isLoading, error] = useAuthState(auth);
  const history = useHistory();

  const [isPaymentPending, setIsPaymentPending] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const [bookingDetails, setBookingDetails] = useState({});
  const location = useLocation();

  // useEffect(() => {
  //   if (!user && !isLoading) {
  //     history.push('/'); // Redirect to home page if user is not authenticated
  //   }
  // }, [user, isLoading, history]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const details = {
      user: params.get('user'),
      type: params.get('type'),
      email: params.get('email'),
      eventTypeSlug: params.get('eventTypeSlug'),
      title: params.get('title'),
      description: params.get('description'),
      startTime: new Date(params.get('startTime')),
      endTime: new Date(params.get('endTime')),
      location: decodeURIComponent(params.get('location')),
    };
    setBookingDetails(details);
  }, [location.search]);

  const handleRedirect = () => {
    history.push('/');
  };

  useEffect(() => {
    if (paymentFailed) {
      setTimeout(() => {
        alert('Your payment towards booking confirmation failed, please try again later!');
        history.push('/');
      }, 1000);
    }
  }, [paymentFailed, history]);

  if (loading) {
    return (
      <div className='loading-container text-center'>
        <div className='loader text-center'></div>
        <h3 className='text-center'>Processing your payment...</h3>
        <div className='text-center'>
          Please do not refresh the page or press back button
        </div>
      </div>
    );
  }

  if (isPaymentPending) {
    return (
      <div>
        <Payment
          loading={loading}
          setLoading={setLoading}
          setIsPaymentPending={setIsPaymentPending}
          setPaymentFailed={setPaymentFailed}
        />
      </div>
    );
  }

  if (paymentFailed) {
    return (
      <div className="payment-failed">
        <h1>Payment Failed</h1>
        <p className="greeting">Dear User,</p>
        <p className="message">Your payment for the booking of {bookingDetails.type} has failed. Below are the details of your attempted booking:</p>
        <div className="booking-details">
          <p><strong>Type:</strong> {bookingDetails.type}</p>
          <p><strong>Email:</strong> {bookingDetails.email}</p>
          <p><strong>Event Type:</strong> {bookingDetails.eventTypeSlug}</p>
          <p><strong>Title:</strong> {bookingDetails.title}</p>
          <p><strong>Description:</strong> {bookingDetails.description}</p>
          {/* <p><strong>Start Time:</strong> {bookingDetails.startTime.toLocaleString()}</p>
          <p><strong>End Time:</strong> {bookingDetails.endTime.toLocaleString()}</p> */}
          <p><strong>Location:</strong> {bookingDetails.location}</p>
        </div>
        <p className="thanks">Sorry for the inconvenience caused!</p>
        <p className="regards">Thanks & Regards,<br />Team DocBook</p>
      </div>
    );
  }

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmed</h1>
      <p className="greeting">Dear User,</p>
      <p className="message">Your booking for {bookingDetails.type} has been successfully confirmed. Below are the details of your appointment:</p>
      <div className="booking-details">
        <p><strong>Type:</strong> {bookingDetails.type}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Event Type:</strong> {bookingDetails.eventTypeSlug}</p>
        <p><strong>Title:</strong> {bookingDetails.title}</p>
        <p><strong>Description:</strong> {bookingDetails.description}</p>
        <p><strong>Start Time:</strong> {bookingDetails.startTime.toLocaleString()}</p>
        <p><strong>End Time:</strong> {bookingDetails.endTime.toLocaleString()}</p>
        <p><strong>Location:</strong> {bookingDetails.location}</p>
      </div>
      <div className='back-button'>
        <button className="home-book button button-main back-button" onClick={handleRedirect}>
          <span className="home-text07">{`<--Back to Home`}</span>
        </button>
      </div>
      <p className="thanks">Thank you for booking with us!</p>
      <p className="regards">Thanks & Regards,<br />Team DocBook</p>
    </div>
  );
};

export default BookingConfirmation;
