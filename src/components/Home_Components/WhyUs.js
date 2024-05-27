import React from 'react'
import "../../views/home.css";


const WhyUs = () => {
  return (
    <div className='home-container'>
      <section id="how-it-works" className="home-why">
        <div className="home-heading09">
          <h2 className="home-header08">Why choose us</h2>
          <h3 className="home-header09">
            Choose DocBook for your healthcare needs and benefit from our experienced specialists who are board-certified leaders in their fields. Our user-friendly platform makes scheduling appointments easy and hassle-free, while providing comprehensive care tailored to your unique health needs, from diagnosis to treatment. We are committed to patient satisfaction, ensuring you receive the highest quality care. Additionally, we prioritize your privacy with secure systems designed to protect your personal information.
          </h3>
        </div>
        <div className="home-content03">
          <div className="home-video">
            <video
              src
              poster="/Branding/whyus.jpg"
              className="home-video1"
            ></video>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs