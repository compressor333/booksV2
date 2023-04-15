import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const key = 'AIzaSyDL06aBH_O5VUNH94BbDh91mwXlB-0n354'
// const query = 'js'




export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async function (q, { rejectWithValue, dispatch, getState }) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}&maxResults=40`
        try {
            const res = await fetch(url)
            if (!res.ok) {
                console.log('hello')
                throw new Error('error')
            }
            console.log(res)
            const data = await res.json()
            return data.items
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const booksSlice = createSlice({
    name: 'booksState',
    initialState: {
        books: [],
        loading: null,
        error: null,
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.loading = 'loading'
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.loading = 'loaded'
            state.books = action.payload
            console.log(state.books)
        },
        [fetchBooks.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = 'rejected'
        }
    }
})

export default booksSlice.reducer
