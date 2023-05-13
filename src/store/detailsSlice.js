import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const bookDetails = createAsyncThunk(
    'books/bookDetails',
    async function(id, {rejectWithValue}) {
        const url = `https://www.googleapis.com/books/v1/volumes/${id}`
        try {
           const res = await fetch(url)
           if(!res.ok) {
            throw new Error('no responce')
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
        loading: null,
        error: null
    },

    extraReducers: {
        [bookDetails.pending]: (state) => {
            state.loading = 'loading'
            state.error = null
        },
        [bookDetails.fulfilled]: (state, action) => {
            state.loading = 'loaded'
            state.details = action.payload
        },
        [bookDetails.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = 'rejected'
        }
    }
}) 

export default detailsSlice.reducer