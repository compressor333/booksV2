import React from "react";
import { fetchBooks } from "./store/fetchSlice";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import ItemBig from './components/ItemBig'
import Search from "./components/Search";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";


function App() {

  const { loading, error } = useSelector(state => state.booksStore)
  const query = useSelector(state => state.queryStore.query)
  const dispatch = useDispatch()
  const fetch = () => dispatch(fetchBooks(query))

  React.useEffect(() => {
    fetch()
  }, [query])

  return (
    <div className="container" >
      <Header />
      <Search />
      <Routes>
        <Route path='/' element = {error ? <h1 className="center">{error}</h1> : loading === 'loading' ? <h1 className="center">{<Loader />}</h1> : <Items />} />
        <Route path ='/details/:id' element = { <ItemBig /> } />
      </Routes>
    </div>
  );
}

export default App;
