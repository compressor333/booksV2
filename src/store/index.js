import { configureStore } from "@reduxjs/toolkit"
import booksSlice from './fetchSlice'
import searchSlice from "./searchSlice"
import detailsSlice from "./detailsSlice"

export default configureStore({
    reducer: {
        booksStore: booksSlice,
        queryStore: searchSlice,
        detailsStore: detailsSlice
    }
})