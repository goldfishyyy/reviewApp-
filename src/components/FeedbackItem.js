import React from 'react'
import Card from './Card'
import{FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext'

//UI component that display score and review text
function FeedbackItem({item, }) {
 
const {handleDelete, editFeedback} = useContext(FeedbackContext);

  return (
      <Card  >
      <div className="num-display">{item.rating}</div>
      <button onClick = {()=>handleDelete(item.id)} className='close' >
      
        <FaTimes color='purple'/>
      </button>
      <button className='edit' onClick = {()=>editFeedback(item)}>
        <FaEdit color='red' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}


export default FeedbackItem;
