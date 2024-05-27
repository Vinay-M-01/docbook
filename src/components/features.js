import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div className="features-section quick-links">
      <div className="features-heading">
        <h3 className="features-header">{props.Title}</h3>
        <img alt="image" src={props.Icon} className="features-icon" />
      </div>
      <p className="features-text">{props.Description}</p>
      <div className="features-divider"></div>
    </div>
  )
}

Features.defaultProps = {
  Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Icon: '/Icons/arrow.svg',
  Title: 'Virtual Assistant',
}

Features.propTypes = {
  Description: PropTypes.string,
  Icon: PropTypes.string,
  Title: PropTypes.string,
}

export default Features
