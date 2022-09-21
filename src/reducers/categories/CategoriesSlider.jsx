import { createSlice } from '@reduxjs/toolkit'

export const CategoriesSlider = createSlice({
    name: 'user',
    initialState: {
        data: {},
    },
    reducers: {
        addCategories: (state, action) => {
            state.data = action.payload
        },
    },
})
export const { addCategories } = CategoriesSlider.actions
export default CategoriesSlider.reducer;