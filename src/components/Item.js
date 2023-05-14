import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ title, img, authors, id }) => {
  return (
    <Link key={id} to={`/details/${id}`}>
      <div className='card'>
        <div className='card-inner'>
          <img src={img} alt='' />
          <div className='card-text'>
            <h1>{title}</h1>
            <ul>
              <li>{authors}</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Item