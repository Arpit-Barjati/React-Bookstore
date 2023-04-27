import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders : []
}

const orderSlice = createSlice({
    name:"orders",
    initialState,
    reducers:{
        newOrder : (state,action)=>{
            console.log("Payload",action.payload)
            state.orders.push(...action.payload);
        }
    }
})

export const {newOrder} = orderSlice.actions;
export default orderSlice.reducer;