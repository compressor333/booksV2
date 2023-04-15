import { useSelector, useDispatch } from "react-redux"
import { updateQuery } from "../store/searchSlice"
import React from "react"
const Search = () => {
    const [text, setText] = React.useState('')
    const dispatch = useDispatch()
    const query = useSelector(state => state.queryStore.query)

    function onSubmit(q) {
        q.preventDefault()
        console.log(text)
        dispatch(updateQuery(text))
        console.log(query)
        setText('')
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit} className="form-control">
                <input
                    type="text"
                    
                    placeholder="input title"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value='search books' className="btn"/>
            </form>
        </div>
    )
}

export default Search