import React from "react";
import PropTypes from "prop-types";

function Season(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      {props.selections.map((produce) => <h4>{produce}</h4>)};
    </React.Fragment>
  );
}

Season.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Season;