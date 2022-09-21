import { configureStore } from '@reduxjs/toolkit'
import CarSlider from '../reducers/car/CarSlider'
import CategoriesSlider from '../reducers/categories/CategoriesSlider'
import UserSlider from '../reducers/user/UserSlider'

export const store = configureStore({
    reducer: {
        car: CarSlider,
        user: UserSlider,
        categories: CategoriesSlider,
    },
})