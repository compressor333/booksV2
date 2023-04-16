import React from 'react'

const Item = ({ title, img, authors }) => {
  return (
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
  )
}
export default Item