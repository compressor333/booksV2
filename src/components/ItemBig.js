import React from 'react'
import './itemBig.css'
import { useParams } from 'react-router-dom'
import { bookDetails } from '../store/detailsSlice'
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import  book  from '../img/book.jpg'
import Loader from "../components/Loader";



const ItemBig = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = () => dispatch(bookDetails(id))
  const data = useSelector(state => state.detailsStore.details?.volumeInfo)
  const { loadingDetails, errorDetails } = useSelector(state => state.detailsStore)

  console.log('from item big')

  React.useEffect(() => {
    details()
  }, [])

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        
        { errorDetails ? <h1 className="center">{errorDetails}</h1> : loadingDetails === 'loading' ? <h1 className="center">{<Loader />}</h1> : (
        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={data?.imageLinks?.small ? data.imageLinks.small : book } alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{data?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span className='fw-6'>Описание: </span>
              <span className='fw-6'>{data?.subtitle}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Авторы: </span>
              <span className='text-italic'>{data?.authors}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Дата релиза: </span>
              <span className='text-italic'>{data?.publishedDate}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Издатель: </span>
              <span>{data?.publisher}</span>
            </div>
          </div>
        </div> )}

      </div> 
    </section>
  )
}

export default ItemBig