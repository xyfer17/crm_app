import React from 'react'
import { TicketCard } from '../components'

const Dashboard = () => {

  const tickets = [
    {
      category: 'q1 2022',
      color: 'red',
      title: 'moon night',
      owner: 'Anina',
      avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'fine all over the wallpaper',
      timestamp: '2017-02-11T07:34:17+0000'
    },
    {
      category: 'q2 2022',
      color: 'blue',
      title: 'moon day',
      owner: 'Anina',
      avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      status: 'working',
      priority: 2,
      progress: 30,
      description: 'fine all over the wallpaper',
      timestamp: '2018-02-11T07:34:17+0000'
    }
    ,
    {
      category: 'q2 2022',
      color: 'red',
      title: 'light ',
      owner: 'Anina',
      avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      status: 'working',
      priority: 2,
      progress: 30,
      description: 'fine all over the wallpaper',
      timestamp: '2018-02-11T07:34:17+0000'
    }
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]
 

  return (
    <div className="dashboard">
      <h1> My Projects </h1>
      <div className="ticket-container">
      {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={filteredTicket.color}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Dashboard