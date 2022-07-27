import React from "react";

import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStatus() {

  const{feedback} = useContext(FeedbackContext);
  //calculate rating average score
  let avgScore =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;
  //making avgScore to 1 decimal place
  avgScore = avgScore.toFixed(1).replace(/[.]0$/,'')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Score: {isNaN(avgScore) ? 0 : avgScore}</h4>
    </div>
  );
}

export default FeedbackStatus;
