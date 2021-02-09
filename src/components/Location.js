import React from 'react';
import PropTypes from 'prop-types';

function Location() {
  return(
    <React.Fragment>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h5>{props.hours}</h5>
      <h3>{props.booth}</h3>
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;