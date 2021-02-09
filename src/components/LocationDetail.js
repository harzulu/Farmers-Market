import React from 'react';
import PropTypes from 'prop-types';

function LocationDetail(props){
  const { location } = props;

  return (
    <React.Fragment>
      <h1>Location Detail</h1>
      <hr/>
      <h3>{location.day}</h3>
      <h3>{location.location}</h3>
      <h5>{location.hours}</h5>
      <h5>{location.booth}</h5>
    </React.Fragment>
  );
}

LocationDetail.propTypes = {
  location: PropTypes.object
}

export default LocationDetail;