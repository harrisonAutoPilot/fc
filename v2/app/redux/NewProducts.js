import { createSlice} from "@reduxjs/toolkit";
import {getNewProducts} from "@Request2/NewProducts"
import dict from "@Helper2/dict";


export const newProductSlice = createSlice({
    name: "newProduct",
    initialState: {
        newProducts: {},
        newProductItems:[],
        newProductStatus: "idle",
        errors: {},
        idStatus: "idle",
       
      
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            
        },

    },
    extraReducers: builder => {
            builder
            .addCase(getNewProducts.pending, state => {
                
                state.newProductStatus = "pending";
                state.errors = {};
                state.newProducts = {};
              
            })

            .addCase(getNewProducts.fulfilled, (state, action) => { 
                state.newProducts = action.payload
                console.log("the new ...", action.payload);
                state.newProductItems = dict(state.newProductItems, action.payload)
                state.newProductStatus = "success";
                state.errors = {};
            })

            .addCase(getNewProducts.rejected, (state, { payload }) => {
               
                state.newProductStatus = "failed";
                state.errors = payload;
            })

           
           
    }
});
export const { cleanup,  } = newProductSlice.actions

export default newProductSlice.reducer;
