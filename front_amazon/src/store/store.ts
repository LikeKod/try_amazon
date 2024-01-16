import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";




const persistConfig = {
    key: 'try-amazon',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    cart: createSlice.reducer,
    carousel: carouselSlice.reducer
})

const persistReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware: buildGetDefaultMiddleware => 
        buildGetDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>