import React, { useState, useEffect, useRef } from 'react';
import "../../views/home.css";
import LoginModal from '../LoginModal';
import MyProfilePopover from '../MyProfilePopover';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../FirebaseConfig';
import useRemoveQueryParam from '../../hooks/useRemoveQueryParam'
import { getCalApi } from "@calcom/embed-react";
import Modal from '../Modal.js'

const HeroBanner = () => {
  // Firebase Authentication related code
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfilePopover, setShowProfilePopover] = useState(false);
  const profileButtonRef = useRef(null); // Reference to the profile button/image
  const removeAllQueryParams = useRemoveQueryParam();

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

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const toggleProfilePopover = () => {
    setShowProfilePopover(!showProfilePopover);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      alert('successfully logged out');
      removeAllQueryParams();
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "styles": { "branding": { "brandColor": "#4E85FF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className='home-container'>
      {/* Hero Banner */}
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="https://t3.ftcdn.net/jpg/05/14/36/48/360_F_514364850_xLOQX6SOY2qcjAIcTowsi3xYvHmhmvs0.jpg"
              className="home-logo"
            />
            <nav className="home-links">
              <a href="#how-it-works" className="home-link01">
                About Us
              </a>
              <a href="#consultation">
                <span className="home-link02">Specialities</span>
              </a>
              <a href="#feedback" className="home-link03">
                Feedback
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image06"
              />
              <a href="tel:+91-8747867871" className="home-text06">
                +91-8747867871
              </a>
            </button>
            {
              loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {user ? (
                    <>
                      <div ref={profileButtonRef}>
                        {
                          user.photoURL ?
                            <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer' style={{ borderRadius: "50%" }} width="50px" onClick={() => {
                              toggleProfilePopover()
                              console.log("popopo")
                            }} /> :
                            <button className="home-book button button-main" onClick={toggleProfilePopover}>
                              <span className="home-text07">My Profile</span>
                            </button>
                        }
                      </div>
                      <button className="home-book button button-main" onClick={handleLogout}>
                        <span className="home-text07">LogOut</span>
                      </button>
                    </>
                  ) : (
                    <button className="home-book button button-main" onClick={openLoginModal}>
                      <span className="home-text07">Login</span>
                    </button>
                  )}
                </>
              )
            }
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://t3.ftcdn.net/jpg/05/14/36/48/360_F_514364850_xLOQX6SOY2qcjAIcTowsi3xYvHmhmvs0.jpg"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-238-238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <a href="#how-it-works">
                  <span className="home-text08">About Us</span>
                </a>
                <a href="#consultation">
                  <span className="home-text09">Specialities</span>
                </a>
                <a href="#book">
                  <span className="home-text11">Contact</span>
                </a>
                {
                  loading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      {user ? (
                        <>
                          <div>
                            {
                              user.photoURL ?
                                <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer' style={{ borderRadius: "50%" }} onClick={toggleProfilePopover} /> :
                                <button className="home-book button button-main" onClick={toggleProfilePopover}>
                                  <span className="home-text07">My Profile</span>
                                </button>
                            }
                          </div>
                          <button className="home-book button button-main" onClick={handleLogout}>
                            <span className="home-text07">LogOut</span>
                          </button>
                        </>
                      ) : (
                        <button className="home-book button button-main" onClick={openLoginModal}>
                          <span className="home-text07">Login</span>
                        </button>
                      )}
                    </>
                  )
                }
              </nav>
            </div>
          </div>
        </header>

        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">
                Welcome to DocBook!
              </h1>
              <h3 className="" style={{ paddingLeft: "10px" }}>
                Your Health, Our Priority - Book an Appointment Today!
              </h3>
              <br />
              <p className="home-caption6">
                Easily connect with trusted doctors across various specialties for all your health concerns. Experience seamless booking and exceptional care with DocBook.
              </p>
            </div>
            <button className="button button-main home-book2" onClick={openModal} >
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image10"
              />
              <span>Book Appointment Now!</span>
            </button>
          </div>
          <div className="home-image11">
            <img alt="image" src="/Doctors/doctor-image-1500w.png" className="home-image12" />
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <div>
        <Modal showModal={showModal} closeModal={closeModal} />
      </div>
      <div style={{ width: "200px" }}>
        <LoginModal showLoginModal={showLoginModal} closeLoginModal={closeLoginModal} />
      </div>

      <div>
        {showProfilePopover && (
          <div >
            <MyProfilePopover closePopover={toggleProfilePopover} anchorRef={profileButtonRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroBanner;
