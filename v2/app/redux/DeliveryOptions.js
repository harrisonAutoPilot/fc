import { createSlice} from "@reduxjs/toolkit";
import { getDeliveryOptions } from "@Request2/DeliveryOptions";

export const deliveryOptionSlice = createSlice({
    name: "delivery_options",
    initialState: {
       options: [],
        status: "idle",
        deliveryErrors : {}
    },
    reducers:{
        cleanup:(state) => {
            state.deliveryErrors = {}
            state.options = []
            state.status = "idle"
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDeliveryOptions.pending, state => {
                state.status = "pending";
                state.deliveryErrors = {};
                state.options = [];
                
            })
            .addCase(getDeliveryOptions.fulfilled, (state, action) => {
                state.options = action.payload;
                state.status = "success";
                state.deliveryErrors  = {};
             
            })
            .addCase(getDeliveryOptions.rejected, (state, { payload }) => {
                state.status = "failed";
                state.deliveryErrors = payload;
                state.options = [];
            })
    }
});

export const { cleanup} = deliveryOptionSlice.actions;

export default deliveryOptionSlice.reducer;