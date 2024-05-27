import React, { useEffect } from 'react'
import './DoctorCard.css'
import { getCalApi } from "@calcom/embed-react";

const DoctorCard = ({ doctor, closeModal }) => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "styles": { "branding": { "brandColor": "#4E85FF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className="card-container" data-cal-namespace=""
      data-cal-link={`vinay-melavanki-5d2yti/${doctor.specialty}`} data-cal-config='{"layout":"month_view"}' onClick={closeModal}>
      <div className="card-content">
        <div className="doctor-image">
          <img
            alt="Vinay Melavanki"
            src={doctor?.imageUrl}
            className="doctor-profile-image"
          />
        </div>
        <div className="doctor-info">
          <h6 className="doctor-name">{doctor.name}</h6>
          <div className="doctor-specialty-container">
            <h6 className="doctor-specialty">{doctor.specialty}</h6>
          </div>
        </div>
        <div className="action-button">
          <h6 className="action-text">Book Appointment</h6>
        </div>

      </div>
    </div>
  )
}

export default DoctorCard