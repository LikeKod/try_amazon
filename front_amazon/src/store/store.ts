import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { carouselSlice } from "./carousel/carousel.slice";
import { cartSlice } from "./cart/cart.slice";
import { filtersSlice } from "./filters/filters.slice";
import { userSlice } from "./user/user.slice";


const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    carousel: carouselSlice.reducer,
    filters: filtersSlice.reducer
})

let mainReducer = combinedReducers

if(isClient){
    const {persistReducer} = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
        key: 'try-amazon',
        storage,
        whitelist: ['cart'],
    }

    mainReducer = persistReducer(persistConfig, combinedReducers)
}


export const store = configureStore({
    reducer: mainReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: true
            },
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>