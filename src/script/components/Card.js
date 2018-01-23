import React from 'react'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'

const Card = ({ client, className, size }) => {
  return (
    <Tilt
      style={{ height: 400 }}
      options={{
        max: 20,
        speed: 100,
        scale: 1,
        glare: true
      }}
      className='card'
    >
      <Link
        to={`/work/${client.slug}`}
        key={client.order}
      >
        <div className='card-img'
          style={{
            backgroundImage: `url(${require(`Images/${client.slug}/img-presentation.png`)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }} />
        <div>
          <h3>{client.name}</h3>
          <h4>{client.description}</h4>
        </div>
      </Link>
    </Tilt>
  )
}

export default Card
