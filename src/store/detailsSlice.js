import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const key = 'AIzaSyA3e6UvWETFHDNct6OlFZPYcl8PJjEkIh8'


export const bookDetails = createAsyncThunk(
    'books/bookDetails',
    async function(id, {rejectWithValue}) {
        const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`
        try {
           const res = await fetch(url)
           if(!res.ok) {
            throw new Error('no responce from Details')
           }
           const data = await res.json()
           return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const detailsSlice = createSlice({
    name: 'detailsState',
    initialState: {
        details: [],
        loadingDetails: null,
        errorDetails: null
    },

    extraReducers: {
        [bookDetails.pending]: (state) => {
            state.loadingDetails = 'loading'
            state.errorDetails = null
        },
        [bookDetails.fulfilled]: (state, action) => {
            state.loadingDetails = 'loaded'
            state.details = action.payload
        },
        [bookDetails.rejected]: (state, action) => {
            state.errorDetails = action.payload
            state.loadingDetails = 'rejected'
        }
    }
}) 

export default detailsSlice.reducer