import React from 'react';
import Location from './Location.js';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
    id: v4()
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
    id: v4()
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
    id: v4()
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
    id: v4()
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
    id: v4()
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
    id: v4()
  }
];

function Schedule(props) {
  return (
    <React.Fragment>
      <hr/>
      {marketSchedule.map((location) =>
      <Location 
        whenLocationClicked = { props.onLocationSelection }
        day={location.day}
        location={location.location}
        hours={location.hours}
        booth={location.booth}
        id={location.id}/>
      )}
    </React.Fragment>
  );
}

Schedule.propTypes = {
  onLocationSelection: PropTypes.func
}

export default Schedule;
export {marketSchedule};