import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const key = 'AIzaSyA3e6UvWETFHDNct6OlFZPYcl8PJjEkIh8'

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async function ({query, category, order}, { rejectWithValue }) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${category}&orderBy=${order}&key=${key}&maxResults=40`
        console.log(url)
        console.log(category + 'hey')
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error('no response')
            }
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
        visible: 4,
    },

    reducers: {
        Load(state) {
            state.visible = state.visible += 4
        }
    },

    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.loading = 'loading'
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.loading = 'loaded'
            state.books = action.payload
        },
        [fetchBooks.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = 'rejected'
        }
    }
})

export const { Load } = booksSlice.actions
export default booksSlice.reducer
