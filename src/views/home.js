import React, { useState, useEffect } from 'react';

import { Helmet } from "react-helmet";
import "./home.css";
import HeroBanner from "../components/Home_Components/HeroBanner";
import ConsultationFor from "../components/Home_Components/ConsultationFor";
import WhyUs from "../components/Home_Components/WhyUs";
import VisionMission from "../components/Home_Components/VisionMission";
import Feedback from "../components/Home_Components/Feedback";
import Footer from "../components/Home_Components/Footer";
import Modal from "../components/Modal";
import { getCalApi } from "@calcom/embed-react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';

const Home = (props) => {

  // Firebase Authentication user details
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log(user, error);
    if (!user) {
      alert("Please Login to continue booking your appointments")
      return
    } else if (!user.displayName && !user.photoURL) {
      alert("Please Update your profile")
      return
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "styles": { "branding": { "brandColor": "#4E85FF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className="home-container">
      <Helmet>
        <title>DocBook</title>
        <meta property="og:title" content="DocBook" />
      </Helmet>

      {/* Hero Banner */}

      <HeroBanner />

      {/* Consultation Section */}
      <ConsultationFor />

      {/* Why Choose Us */}

      <WhyUs />

      {/* Vision and Mission Statement */}

      <VisionMission />

      {/* Book an Appointment CTA */}

      <section id="schedule" className="home-schedule">
        <div className="home-content07">
          <div className="home-header15">
            <h2 className="home-heading13">
              Schedule an appointment today
            </h2>
            <p className="home-caption8">
              Easily connect with trusted doctors across various specialties for all your health concerns. Experience seamless booking and exceptional care with DocBook.
            </p>
          </div>
          <div className="home-types">
            <button className="button button-main button-white home-book-person1" onClick={openModal}>
              <span>Book an appointment</span>
            </button>
          </div>
        </div>
      </section>

      {/* Patient Feedback Section */}

      <Feedback />

      {/* Footer Integration  */}
      <Footer />

      <div>
        <Modal showModal={showModal} closeModal={closeModal} />
      </div>

    </div>
  );
};

export default Home;
