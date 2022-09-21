import { createSlice } from '@reduxjs/toolkit'

export const CarSlider = createSlice({
    name: 'car',
    initialState: {
        data: {},
        car: {}
    },
    reducers: {
        addCars: (state, action) => {
            state.data = action.payload
        },
        addCar: (state, action) => {
            state.car = action.payload
        },
    },

})
export const { addCars, addCar } = CarSlider.actions
export default CarSlider.reducer;