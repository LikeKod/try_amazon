import { errorCatch } from "@/assets/styles/api/api.helper";
import { removeFromStorage } from "@/assets/styles/services/auth/auth.helper";
import { AuthService } from "@/assets/styles/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('register', data)
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('login', data)
            return response
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse> (
    'auth/check-auth',
    async (_, thunkApi) => {
        try{
            const response = await AuthService.getNewTokens()
            return response.data
        }catch (error) {
            if (errorCatch(error) === 'jwt expired') {
                thunkApi.dispatch(logout())
            }
            return thunkApi.rejectWithValue(error)
        }
    }
)
