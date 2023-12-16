import { createSlice} from "@reduxjs/toolkit";
import {addToCart, updateCart,deleteAllCart,deleteMultipleCart, listCart,searchCartList, deleteCart, getOutOfStockCart,
    removeOutOfStockCart, searchCart} from "@Request2/Cart"
import dict from "@Helper2/dict";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        listItems:[],
        status: "idle",
        searchStatus:"idle",
        searchCartsData: {},
        addToCartStatus: "idle",
        searchedCarts:[],
        errors: {},
        cartStatus: "idle",
        addCart: "idle",
        removeCart: "idle",
        removeAllCart: "idle",
        searchCartStatus: "idle",
        searchCartData: [],
        searchCartCurrentData: {},
        removeMultipleCart: "idle",
        addCart: "idle",
        updateCartItems: "idle",
        loaded: "idle",
        outofStockStatus: "idle",
        outofStockData: [],
        outofStockStatus: "idle",
        outofStockData: [],
        removeOutOfStockCartStatus: "idle"
    
    },
    
    reducers:{
        cleanSelected: (state) => {
            state.errors = {}
            state.removeMultipleCart = "idle"
        },
        // remove:(state) => {
        //     state.removeCart = "idle",
        //     state.errors = {}
        // },
        remove:(state) => {
            state.items = {}
            state.listItems = []
            state.status = "idle"
            state.loaded = "idle"
        },
        removeAll:(state) => {
            state.removeAllCart = "idle",
            state.errors = {}
        },
        cleanList: (state) => {
            state.items = {}
            state.listItems = []
            state.cartStatus = "idle",
            state.errors = {}
        },
        cleanSearchCart: (state) => {
            state.searchCartStatus = "idle"
            state.searchCartCurrentData = {}
            state.searchCartData = []
        },
        
        cleanupAddToCart: (state) => {
            state.addToCartStatus = "idle"
            state.errors = {}
        },
        cleanUpdateCart: (state) => {
            state.updateCartItems = "idle"
            state.errors = {}
        },
        cleanOutOfStock: (state) => {
            state.outofStockStatus= "idle"
            state.errors = {}
            state.outofStockData = []
        },
        cleanRemoveOutOfStock: (state) => {
            state.removeOutOfStockCartStatus= "idle"
            state.errors = {}
        },

    },
    extraReducers: builder => {

        builder
        .addCase(listCart.pending, state => {
            state.cartStatus = "pending";
            state.errors = {};
        })
        .addCase(listCart.fulfilled, (state, action) => {
            state.items = action.payload
            state.listItems = dict(state.listItems, action.payload.carts.data)
            state.cartStatus = "success";
        })
        .addCase(listCart.rejected, (state, { payload }) => {
            state.cartStatus = "failed";
            state.errors = payload;

        })




            // builder
            // .addCase(searchCartList.pending, state => {
            //     state.errors = {};
            //     state.searchStatus = "pending";
            // })
            // .addCase(searchCartList.fulfilled, (state, action) => {
            //     const reducerWithDictionary = (arrayOne, arrayTwo) => {
            //         const reducedArray = []
            //         const dictionary = {}
                  
            //         arrayOne.forEach(object => {
            //           if(dictionary[object.id]) return
            //           dictionary[object.id] = true
            //           reducedArray.push(object)
            //         })
                  
            //         arrayTwo.forEach(object => {
            //           if(dictionary[object.id]) return
            //           dictionary[object.id] = true
            //           reducedArray.push(object)
            //         })
                  
            //         return reducedArray
            //       }
            //     state.searchedCarts = reducerWithDictionary(state.searchedCarts, action.payload.data);
            //     state.searchCartsData = action.payload;
            //     state.searchStatus = "success";
            //     state.errors = {};
            // })
            // .addCase(searchCartList.rejected, (state, { payload }) => {
            //     state.searchStatus= "failed";
            //     state.errors = payload;
            //     state.searchedCarts = [];
            //     state.searchCartsData = {};
            // })


            builder
            .addCase(searchCartList.pending, state => {
                state.searchCartStatus = "pending";
                state.errors = {};
            })
            .addCase(searchCartList.fulfilled, (state, action) => {
                state.searchCartStatus = "success";
                state.searchCartData = dict(state.searchCartData, action.payload.data)
                state.searchCartCurrentData = action.payload

            })
            .addCase(searchCartList.rejected, (state, { payload }) => {
                state.searchCartStatus = "failed";
                state.errors = payload;
            })






            builder
            .addCase(addToCart.pending, state => {
                state.addToCartStatus = "pending";
                state.errors = {};
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.addToCartStatus = "success";
            })
            .addCase(addToCart.rejected, (state, { payload }) => {
                state.addToCartStatus = "failed";
                state.errors = payload;
            })
            

            builder
            .addCase(updateCart.pending, state => {
                state.updateCartItems = "pending";
                state.errors = {};
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.updateCartItems = "success";
                state.errors = {};
            })
            .addCase(updateCart.rejected, (state, { payload }) => {
                state.updateCartItems = "failed";
                state.errors = payload;
            })


            builder
            .addCase(deleteCart.pending, state => {
                state.removeCart = "pending";
                state.errors = {};
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.removeCart = "success";
                state.errors = {};
            })
            .addCase(deleteCart.rejected, (state, { payload }) => {
                state.removeCart = "failed";
                state.errors = payload;
            })



            builder
            .addCase(deleteAllCart.pending, state => {
                state.removeAllCart = "pending";
                state.errors = {};
            })
            .addCase(deleteAllCart.fulfilled, (state, action) => {
                state.removeAllCart = "success";
                state.errors = {};
            })
            .addCase(deleteAllCart.rejected, (state, { payload }) => {
                state.removeAllCart = "failed";
                state.errors = payload;
            })


            builder
            .addCase(deleteMultipleCart.pending, state => {
                state.removeMultipleCart = "pending";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.fulfilled, (state, action) => {
                state.removeMultipleCart = "success";
                state.errors = {};
            })
            .addCase(deleteMultipleCart.rejected, (state, { payload }) => {
                state.removeMultipleCart = "failed";
                state.errors = payload;
            })


            builder
            .addCase(getOutOfStockCart.pending, state => {
                state.outofStockStatus = "pending";
                state.outofStockData  = []
                state.errors = {};
            })
            .addCase(getOutOfStockCart.fulfilled, (state, action) => {
                state.outofStockStatus = "success";
                state.outofStockData = action.payload

            })
            .addCase(getOutOfStockCart.rejected, (state, { payload }) => {
                state.outofStockStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(removeOutOfStockCart.pending, state => {
                state.removeOutOfStockCartStatus = "pending";
                state.errors = {};
            })
            .addCase(removeOutOfStockCart.fulfilled, (state) => {
                state.removeOutOfStockCartStatus = "success";

            })
            .addCase(removeOutOfStockCart.rejected, (state, { payload }) => {
                state.removeOutOfStockCartStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(searchCart.pending, state => {
                state.searchCartStatus = "pending";
                state.errors = {};
            })
            .addCase(searchCart.fulfilled, (state, action) => {
                state.searchCartStatus = "success";
                state.searchCartData = dict(state.searchCartData, action.payload.data)
                state.searchCartCurrentData = action.payload

            })
            .addCase(searchCart.rejected, (state, { payload }) => {
                state.searchCartStatus = "failed";
                state.errors = payload;
            })



    }
});
export const { cleanSelected, remove,  cleanList, 
    cleanSearchCart, cleanupAddToCart, cleanUpdateCart, removeAll, cleanOutOfStock, cleanRemoveOutOfStock} = cartSlice.actions

export default cartSlice.reducer;