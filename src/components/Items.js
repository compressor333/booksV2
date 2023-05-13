import React from 'react'
import Item from './Item'

import { useSelector } from 'react-redux'

const Items = () => {
  const { books, visible } = useSelector(state => state.booksStore)

  return (
    <>
      {books === undefined ? <h1 className='center'>Error no responce</h1> :
        <div className='cards' >
          {books.slice(0, visible).map(el => {
            return <Item
              key={el.id}
              id={el.id}
              img={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : 'no image'}
              title={el.volumeInfo.title}
              authors={el.volumeInfo.authors ? el.volumeInfo.authors[0] : 'no authors'}
            />
          })}
        </div>}
      </>
  )
}

export default Items