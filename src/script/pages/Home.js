import React from 'react'
import Card from '../components/Card'
import allProjects from 'Utilities/projects'

const Home = () => {
  return (
    <section className='row'>
      {allProjects.map(client => {
        const className = {
          className: 'card'
        }
        const size = 'small'
        return (
          <Card
            client={client}
            className={className}
            size={size}
            key={client.order}
          />
        )
      })}
    </section>
  )
}

export default Home
