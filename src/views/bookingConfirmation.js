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

  const [bookingDetails, setBookingDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      history.push('/'); // Redirect to home page if user is not authenticated
    }
  }, [user, history]);

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
        <Payment loading={loading} setLoading={setLoading} setIsPaymentPending={setIsPaymentPending} />
      </div>
    );
  }

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmed</h1>
      <p className="greeting">Hello {bookingDetails.user},</p>
      <p className="message">Your booking for {bookingDetails.type} has been successfully confirmed. Below are the details of your appointment:</p>
      <div className="booking-details">
        <p><strong>User:</strong> {bookingDetails.user}</p>
        <p><strong>Type:</strong> {bookingDetails.type}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Event Type:</strong> {bookingDetails.eventTypeSlug}</p>
        <p><strong>Title:</strong> {bookingDetails.title}</p>
        <p><strong>Description:</strong> {bookingDetails.description}</p>
        <p><strong>Start Time:</strong> {bookingDetails.startTime.toLocaleString()}</p>
        <p><strong>End Time:</strong> {bookingDetails.endTime.toLocaleString()}</p>
        <p><strong>Location:</strong> {bookingDetails.location}</p>
      </div>
      <p className="thanks">Thank you for booking with us!</p>
      <p className="regards">Thanks & Regards,<br />Team DocBook</p>
    </div>
  );
};

export default BookingConfirmation;