import React from 'react'
import Item from './Item'

import { useSelector } from 'react-redux'

const Items = () => {
  const { books } = useSelector(state => state.booksStore)
  return (
    <div className='cards'>
      {books.map(el => {
        return <Item
          img={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : 'no image'}
          title={el.volumeInfo.title}
          authors={el.volumeInfo.authors ? el.volumeInfo.authors[0] : 'no authors'}
        />
      })}</div>
  )
}

export default Items