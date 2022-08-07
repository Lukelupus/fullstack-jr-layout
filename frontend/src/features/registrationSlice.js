import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from "./registrationService.js"


const initialState = {
    registration: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// POST

export const createRegistration = createAsyncThunk('/', 
async (data, thunkAPI) => {
    try {
        return await postService.createRegistration(data)
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})

// GET 

export const getRegistration = createAsyncThunk("/", async(_, thunkAPI) =>{
    try {
        return await postService.getRegistration()
    } catch (error) {
        const message = (error.response && 
                         error.response.data && 
                         error.response.data.message) || 
                         error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// diferente do auth, o reset volta ao estado inicial já que não queremos que o user saia.

export const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createRegistration.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createRegistration.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts.push(action.payload)
            })
            .addCase(createRegistration.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getRegistration.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRegistration.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(getRegistration.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
});

export const { reset } = registerSlice.actions
export default registerSlice.reducer