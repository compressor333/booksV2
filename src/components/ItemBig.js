import React from 'react'
import { useParams } from 'react-router-dom'
import { bookDetails } from '../store/detailsSlice'
import { useDispatch, useSelector } from "react-redux";



const ItemBig = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const det = () => dispatch(bookDetails(id))
  const data = useSelector(state => state.detailsStore.details)
  
  React.useEffect(() => {
    det()
  }, [])


  return (
    <div className='container2'>
    <img className='center1' src={data.volumeInfo?.imageLinks?.thumbnail} />
    </div>
  )
}

export default ItemBig