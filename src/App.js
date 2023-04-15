import React from "react";
import { fetchBooks } from "./store/fetchSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Items from "./components/Items";
import Search from "./components/Search";
import { clearQuery } from "./store/searchSlice"


function App() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.booksStore)
  const query = useSelector(state => state.queryStore.query)
  const fetch = () => dispatch(fetchBooks(query))
  const clear = () => dispatch(clearQuery())
  console.log(query)

  React.useEffect(() => {
    fetch()
  }, [query])

  return (
    <div className="container">
      <Search />
      {error ? <h1>{error}</h1> : loading === 'loading' ? <h1>Loading...</h1> : <Items />}
    </div>
  );
}

export default App;
