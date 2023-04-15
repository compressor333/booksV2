import { configureStore } from "@reduxjs/toolkit"
import booksSlice from './fetchSlice'
import searchSlice from "./searchSlice"

export default configureStore({
    reducer: {
        booksStore: booksSlice,
        queryStore: searchSlice
    }
})