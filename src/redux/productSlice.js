import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk("products", async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json()
    return data.products
})

const initialState = {
    items: [],
    error: null,
    status: undefined
}

export const productSlice = createSlice({
    name: "productslice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            state.status = "success",
                state.items = action.payload
        })
    }
})

export default productSlice.reducer