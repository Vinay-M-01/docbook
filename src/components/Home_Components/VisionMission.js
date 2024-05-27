import React from 'react'
import "../../views/home.css";


const VisionMission = () => {
  return (
    <div className='home-container'>
      <section className="home-features1">
        <div className="home-section6">
          <div className="home-content04">
            <div className="home-header12">
              <h2 className="home-heading10">Vision</h2>
              <p className="home-capton">
                Our vision is to revolutionize healthcare access by seamlessly connecting patients with top medical professionals, ensuring timely, quality care for all. We strive to create a future where healthcare is easily accessible, personalized, and efficient, bridging the gap between patients and the best possible care.
              </p>
            </div>
          </div>
          <img alt="image" src='/Doctors/ravi.jpg' className="home-image15" />
        </div>
        <div className="home-section7">
          <div className="home-content05">
            <div className="home-header13">
              <h2 className="home-heading11">Mission</h2>
              <p className="home-capton1">
                Our mission at DocBook is to provide a reliable and efficient platform for booking medical appointments, enhancing patient experience and fostering better health outcomes through comprehensive and accessible healthcare services. We aim to empower patients with the information and tools they need to make informed health decisions, offering support every step of the way. By leveraging technology and innovation, we are dedicated to transforming the healthcare journey, making it simpler, faster, and more effective for everyone.
              </p>
            </div>
          </div>
          <img alt="image" src="/Doctors/lab-1500w.png" className="home-image17" />
        </div>
      </section>
    </div>
  )
}

export default VisionMission