import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  /*1. extract whaterver we want from FeedbackContext by using useContext() hook, 
  passing in what context we want to use(the context instance)
2. now we have access to the Provider value property 

  */
  const { feedback, handleDelete } = useContext(FeedbackContext);

  const layout = feedback.map((item) => {
    return (
      <FeedbackItem key={item.id} item={item}  />
    );
  });

  if (!feedback || feedback.length === 0) {
    return <div> No feedback yet</div>;
  }

  return (
    <div className="feedback-list">
      {/* FeedbackItem component rendered here  */}
      {layout}
    </div>
  );
}

export default FeedbackList;
