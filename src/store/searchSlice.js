import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: 'Пушкин',
        category: '',
        order: 'relevance'
    },
    reducers: {
        updateQuery(state, action) {
            state.query = action.payload
        },
        updateCategory(state, action) {
            state.category = action.payload
        },
        updateOrder(state, action) {
            state.order = action.payload
        }
    }
})

export const { updateQuery, updateCategory, updateOrder } = searchSlice.actions
export default searchSlice.reducer