import React from 'react'
import axios from 'axios'

const DeleteBlock = ({documentId}) => {

  const deleteTicket = async () => {
    const response = await axios.delete(`http://localhost:4004/tickets/${documentId}`)
    const success = response.status == 200
    if (success) window.location.reload(200)
  }

  return (
    <div className='delete-block'>
       <div className="delete-icon" onClick={deleteTicket}>✖</div>
    </div>
  )
}

export default DeleteBlock