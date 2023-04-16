import { useSelector, useDispatch } from "react-redux"
import { updateQuery } from "../store/searchSlice"
import React from "react"

const Search = () => {
    const [text, setText] = React.useState('')
    const dispatch = useDispatch()

    function onSubmit(q) {
        q.preventDefault()
        console.log(text)
        if (text === '') {
            dispatch(updateQuery('google'))
        } else {
            dispatch(updateQuery(text))
        }
        setText('')
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
        </div>
    )
}

export default Search