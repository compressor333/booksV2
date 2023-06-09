import React from 'react'
import Item from './Item'
import { Load } from "../store/fetchSlice";
import  book  from '../img/book.jpg'

import { useSelector, useDispatch } from 'react-redux'

const Items = () => {
  const { books, visible } = useSelector(state => state.booksStore)
  const dispatch = useDispatch()
  const LoadMore = () => { dispatch(Load()) }

  // Assuming you have an array of search results called 'books'
const uniqueBooks = books?.filter((book, index, self) => {
  // Filter the array based on the uniqueness of the 'id' property
  return index === self.findIndex((b) => b.id === book.id);
});

  return (
    <>
      {uniqueBooks === undefined ? <h1 className='center'>Error no responce</h1> :
        <div className='cards' >
          {uniqueBooks.slice(0, visible).map(el => {
            return <Item
              key={el.id}
              id={el.id}
              img={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : book}
              title={el.volumeInfo.title.slice(0, 70) + (el.volumeInfo.title.length > 70 ? '...' : '')}
              authors={el.volumeInfo.authors ? el.volumeInfo.authors[0] : 'no authors'}
            />
          })}
        </div>}
        <button className="btn2" onClick={LoadMore}>LOAD MORE</button>
    </>
  )
}

export default Items