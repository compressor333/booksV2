import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: 'js',
    },
    reducers: {
        updateQuery(state, action) {
            state.query = action.payload
        },
        clearQuery(state) {
            state.query = ''
        }
    }
})

export const { updateQuery, clearQuery } = searchSlice.actions
export default searchSlice.reducer