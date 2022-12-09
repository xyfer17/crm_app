import React from 'react'
import { Link } from 'react-router-dom'
import {AvatarDisplay,StatusDisplay,ProgressDisplay,PriorityDisplay,DeleteBlock} from './'

const TicketCard = (color,ticket) => {
  return (
    <div className="ticket-card">
      
      {/* <Link> */}
      <div className="ticket-color"></div>
       <h3>{ticket.title}</h3>
       <AvatarDisplay/>
       <StatusDisplay/>
       <PriorityDisplay/>
       <ProgressDisplay/>
       
      {/* </Link> */}
      <DeleteBlock/>
    </div>
  )
}

export default TicketCard