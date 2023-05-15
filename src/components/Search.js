import { useDispatch } from "react-redux"
import { updateQuery, updateCategory, updateOrder } from "../store/searchSlice"
import { useNavigate } from "react-router-dom"
import React from "react"


const Search = () => {
    const [text, setText] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [order, setOrder] = React.useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeCategory = (e) => {
        setCategory(e.target.value)
        dispatch(updateCategory(e.target.value))
    }
 
    const changeOrder = (j) => {
        setOrder(j.target.value)
        dispatch(updateOrder(j.target.value))
    }

    function onSubmit(q) {
        q.preventDefault()
        if (text === '') {
            dispatch(updateQuery('google'))
        } else {
            dispatch(updateQuery(text))
        }
        setText('')
        navigate('/')
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit} className="form-control">
                <input
                    className="text"
                    type="text"
                    placeholder="введите поиск"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value='искать' className="btn" />  
            </form>
            <div className="options" >
            <select className="select" id="categorySelect" value={category} onChange={changeCategory}>
                <option value="">All</option>
                <option value="Biography">Biography</option>
                <option value="Computers">Computers</option>
                <option value="History">History</option>
                <option value="Medical">Medical</option>
                <option value="Art">Art</option>
                <option value="Poetry">Poetry</option>
            </select>
            <select className="select" id="orderBy" value={order} onChange={changeOrder}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
            </div>
        </div>
    )
}

export default Search