import React from 'react'
import "../../views/home.css";
import Practice from '../practice';
import { Link } from "react-router-dom";



const ConsultationFor = () => {
  return (
    <div className='home-container'>
      <section id="consultation" className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text14">Our Expertise</h2>
        </div>
        <div className="home-content02">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice
                  Title="Dermatology"
                  Description="From acne to skin cancer, our dermatologists offer comprehensive skin care solutions to keep your skin healthy and vibrant."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice
                  Title="Pediatrics"
                  Description="Dedicated to the health and well-being of children, our pediatricians provide expert care from infancy through adolescence."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice
                  Title="Orthopedics"
                  Description="Our orthopedic specialists address all musculoskeletal issues, from fractures to joint replacements, to keep you moving comfortably."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice
                  Title="Psychiatry"
                  Description="Our psychiatry team provides compassionate mental health care, offering support for a range of conditions like anxiety, depression, and more."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice
                  Title="Gynecology"
                  Description="Focused on women’s health, our gynecologists offer personalized care for reproductive health, from routine exams to complex treatments."
                ></Practice>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConsultationFor