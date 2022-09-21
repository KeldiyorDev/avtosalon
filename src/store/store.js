import { configureStore } from '@reduxjs/toolkit'
import filmsSlider from '../todo/filmsSlider'

export const store = configureStore({
    reducer: {
        films: filmsSlider,
    },
})