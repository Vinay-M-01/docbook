import React from 'react'
import "../../views/home.css";


const Footer = () => {
  return (
    <div className='home-footer-container'>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="https://t3.ftcdn.net/jpg/05/14/36/48/360_F_514364850_xLOQX6SOY2qcjAIcTowsi3xYvHmhmvs0.jpg"
              className="home-image32"
            />
            <p className="home-text92">
              Welcome to DocBook !
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image33"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image34"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image35"
              />
            </div>
          </div>
        </div>
        <div className="home-right1">

          <div className="home-list4">
            <span className="home-header17">Available in metro cities across India</span>
            <a
              href="mailto:contact@template.new?subject=Main"
              className="home-link14"
            >
              Email - docbook@gmail.com
            </a>
            <a href="tel:+91-8747867871" className="home-link15">
              Mobile - +91-8747867871
            </a>
          </div>
          <div className="home-list5">
            <div className="home-links3">
              <div className="home-link13">
                Copyright @ 2024 DocBook
              </div>

              <div className="home-link13">
                Terms and Conditions
              </div>

              <div className="home-link13">
                Refund Policy
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer