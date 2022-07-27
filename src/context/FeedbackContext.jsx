import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//step1: using createContext function to create a context
const FeedbackContext = createContext();

/*step2: the Provider component is available for the context instance: 
instanceName.Provider
*/

//a function component take children component as input
export const FeedbackProvider = ({ children }) => {
  //create the state you want to pass to other component
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from context 1",
      rating: 1,
    },
    {
      id: 2,
      text: "from context 2",
      rating: 2,
    },
    {
      id: 3,
      text: "from context 3",
      rating: 3,
    },
  ]);

  //editing a feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    // the item we are editing
    item: {},
    // if we click edit icon, edit will set to true means go to edit mode
    edit: false,
  });

  //a function that get clicked item from editing icon, and use it to set feedbackEdit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id
          ? {
              ...item,
              ...updatedItem,
            }
          : item;
      })
    );
  };

  //a function that handled delete a review
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the reivew?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // a functin to add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(feedback);
  };

  /*any values that we want to pass in like states, or functions will be passed into prop 'value' object in
    <instanceContextName.Provider value={{}}
    */
  return (
    <FeedbackContext.Provider
      value={{
        //    passing everything you want to share with other component into value property
        feedback: feedback,
        handleDelete: handleDelete,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
//export instance context as default
export default FeedbackContext;
