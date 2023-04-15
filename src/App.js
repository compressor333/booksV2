import React from "react";
import { fetchBooks } from "./store/fetchSlice";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import Search from "./components/Search";


function App() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.booksStore)
  const query = useSelector(state => state.queryStore.query)
  const fetch = () => dispatch(fetchBooks(query))

  React.useEffect(() => {
    fetch()
  }, [query])

  return (
    <div className="container">
      <h1 className="center">ПОИСК КНИГ</h1>
      <Search />
      {error ? <h1 className="center">{error}</h1> : loading === 'loading' ? <h1 className="center">Loading...</h1> : <Items />}
    </div>
  );
}

export default App;
