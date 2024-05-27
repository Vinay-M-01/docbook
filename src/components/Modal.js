
import React, { useState } from 'react';
import './Modal.css';
import DoctorCard from './DoctorCard';

const Modal = ({ showModal, closeModal }) => {
  const doctor = [
    {
      name: 'Dr. Ravi Kumar',
      imageUrl: '/Doctors/ravi.jpg',
      specialty: 'cardiology',
    },
    {
      name: 'Dr. Priya Sharma',
      imageUrl: '/Doctors/priya.jpg',
      specialty: 'dermatology',
    },
    {
      name: 'Dr. Arjun Mehta',
      imageUrl: '/Doctors/arjun.jpg',
      specialty: 'pediatrics',
    },
    {
      name: 'Dr. Neha Kapoor',
      imageUrl: '/Doctors/neha.jpg',
      specialty: 'orthopedics',
    },
    {
      name: 'Dr. Anil Verma',
      imageUrl: '/Doctors/ravi.jpg',
      specialty: 'psychiatry',
    },
    {
      name: 'Dr. Sangeeta Rao',
      imageUrl: '/Doctors/sanjeeta.jpg',
      specialty: 'gynecology',
    }
  ]
  return (

    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className='modal-header'>
          <h2>Book an Appointment</h2>
          <span className='close-button' onClick={closeModal}>&times;</span>
        </div>

        <div className='grid-display'>
          {
            doctor.map((doc) => {
              // console.log(doc)
              return <DoctorCard doctor={doc} closeModal={closeModal} key={doc.specialty} />
            })
          }
        </div>

      </div>
    </div>
  );
};

export default Modal;
