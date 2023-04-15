import React from 'react'

const Item = ({ title, img, authors }) => {
  return (
 <div className='card'>
  <div className='card-inner'>
    <div className='card-front'>
      <img src={img} alt='' />
    </div>
    <div className='card-back'>
      <h1>{title}</h1>
      <ul>
        <li>{authors}</li>
      </ul>
    </div>
  </div>
 </div>
  )
}
export default Item