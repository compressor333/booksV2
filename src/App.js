import React from "react";
import { fetchBooks, Load } from "./store/fetchSlice";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import Search from "./components/Search";
import Header from "./components/Header";


function App() {
  const dispatch = useDispatch()
  const LoadMore = () => dispatch(Load())
  const { loading, error, visible } = useSelector(state => state.booksStore)
  const query = useSelector(state => state.queryStore.query)
  const fetch = () => dispatch(fetchBooks(query))

  React.useEffect(() => {
    fetch()
  }, [query, visible])

  return (
    <div className="container">
      <Header />
      <Search />
      {error ? <h1 className="center">{error}</h1> : loading === 'loading' ? <h1 className="center">Loading...</h1> : <Items />}
      <button className="btn2" onClick={LoadMore}>LOAD MORE</button>
    </div>
  );
}

export default App;
