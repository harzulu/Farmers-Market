import React from "react";
import PropTypes from "prop-types";

function SeasonDetail(props){
    // const { season } = props;
  return (
    <React.Fragment>
      <h1>Season Information for {props.season.month}</h1>
        {props.season.selection.map((produce) => 
        <h4>{produce}</h4>
        )}
      <hr/>
    </React.Fragment>
  );
}

SeasonDetail.propTypes = {
  season: PropTypes.object
}

export default SeasonDetail;