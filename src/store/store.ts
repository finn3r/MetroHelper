import {combineReducers, configureStore} from "@reduxjs/toolkit"
import inputReducer from "./reducers/InputSlice"
import themeReducer from "./reducers/ThemeSlice"
import cityReducer from "./reducers/CitySlice"


const rootReducer = combineReducers({
    input: inputReducer,
    theme: themeReducer,
    city: cityReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            serializableCheck: false
        })
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];