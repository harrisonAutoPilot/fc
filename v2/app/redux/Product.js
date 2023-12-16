import { createSlice } from "@reduxjs/toolkit";
import { listProducts, searchProducts, searchProductsByItems, productNotification, searchKeyWords } from "@Request2/Product"
import dict from "@Helper2/dict";
export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        searchedProducts: [],
        searchProductsStatus: "idle",
        status: "idle",
        errors: {},
        type_head: [],
        loaded: "idle",
        searchProductsData: [],
        // Keywords
        keywordsStatus: "idle",
        keywordsData: [],
        notify: {},
        notifyStatus: "idle"
    },
    reducers: {
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.loaded = "idle";
            state.products = []
            state.searchedProducts = []
        },
        cleanSearchProducts: (state) => {
            state.searchedProducts = []
            state.searchProductsData = {}
            state.searchProductsStatus = "idle"
        },

        
        cleanProducts: (state) => {
            state.searchedProducts = []
            state.searchProductsData = []
        },
        cleanProduct: (state) => {
            state.searchedProducts = []
            state.searchProductsData = []
        },
        cleanNotification: (state) => {
            state.notify = {}
            state.notifyStatus = "idle"
        },
        cleanKeywords: (state) => {
            state.keywordsStatus = "idle",
            state.keywordsData = []
        },
    },
    extraReducers: builder => {
        builder
            .addCase(listProducts.pending, state => {
                state.status = "pending";
                state.loaded = "pending";
                state.errors = {};
                state.products = []
            })
            .addCase(listProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
                state.loaded = "success";
                state.status = "success";
                state.errors = {};
            })
            .addCase(listProducts.rejected, (state, { payload }) => {
                state.searchProductsStatus = "failed";
                state.loaded = "failed";
                state.errors = payload;
                state.products = [];
            })

        builder
            .addCase(searchProducts.pending, state => {
                state.errors = {};
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                const reducerWithDictionary = (arrayOne, arrayTwo) => {
                    const reducedArray = []
                    const dictionary = {}
                  
                    arrayOne.forEach(object => {
                      if(dictionary[object.id]) return
                      dictionary[object.id] = true
                      reducedArray.push(object)
                    })
                  
                    arrayTwo.forEach(object => {
                      if(dictionary[object.id]) return
                      dictionary[object.id] = true
                      reducedArray.push(object)
                    })
                  
                    return reducedArray
                  }
                state.searchedProducts = reducerWithDictionary(state.searchedProducts, action.payload.data);
                state.searchProductsData = action.payload;
                state.searchProductsStatus = "success";
                state.errors = {};
            })
            .addCase(searchProducts.rejected, (state, { payload }) => {
                state.searchProductsStatus = "failed";
                state.errors = payload;
                state.searchedProducts = [];
                state.searchProductsData = [];
            })


            // builder
            // .addCase(searchProducts.pending, state => {
            //     state.searchProductsStatus = "pending"
            //     state.errors = {};
            // })
            // .addCase(searchProducts.fulfilled, (state, action) => {
            //     state.searchedProducts = dict(state.searchedProducts, action.payload.data);
            //     state.searchProductsData = action.payload;
            //     state.searchProductsStatus = "success"
            // })
            // .addCase(searchProducts.rejected, (state, { payload }) => {
            //     state.errors = payload;
            //     state.searchProductsStatus = "failed"
            // })


            builder
            .addCase(searchProductsByItems.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.type_head = [];
            })
            .addCase(searchProductsByItems.fulfilled, (state, action) => {
                state.type_head = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(searchProductsByItems.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.type_head = [];
            })

            builder
            .addCase(productNotification.pending, state => {
                state.notifyStatus = "pending";
                state.errors = {};
                state.notify = {};
            })
            .addCase(productNotification.fulfilled, (state, action) => {
                state.notify = action.payload;
                state.notifyStatus = "success";
            })
            .addCase(productNotification.rejected, (state, { payload }) => {
                state.notifyStatus = "failed";
                state.errors = payload;
            })
            builder
            .addCase(searchKeyWords.pending, state => {
                state.keywordsStatus = "pending";
                state.errors = {};
                state.keywordsData = []
            })
            .addCase(searchKeyWords.fulfilled, (state, action) => {
                state.keywordsStatus = "success";
                state.keywordsData = action.payload;
            })
            .addCase(searchKeyWords.rejected, (state, { payload }) => {
                state.keywordsStatus = "failed";
                state.errors = payload;
            })

    }
});


export const { cleanup, cleanProducts,cleanProduct, cleanNotification,cleanKeywords, cleanSearchProducts } = productSlice.actions

export default productSlice.reducer;