import React from 'react';
import PropTypes from 'prop-types';

function Location(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenLocationClicked(props.id)}>
        <h3>{props.day}</h3>
        {/* <h3>{props.location}</h3>
        <h5>{props.hours}</h5>
        <h5>{props.booth}</h5> */}
      </div>
      <hr/>
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  id: PropTypes.string,
  whenLocationClicked: PropTypes.func
};

export default Location;