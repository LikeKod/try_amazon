import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import carouselSlice from './carousel/carousel.slice';
// import { cartSlice } from './cart/cart.slice';
import { userSlice } from "./user/user.slice";




const persistConfig = {
    key: 'try-amazon',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    // cart: cartSlice.reducer,
    // carousel: carouselSlice.reducer,
    user: userSlice.reducer
})

const PersistReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: PersistReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: true
            },
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>