import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const listProducts = createAsyncThunk("product/all",
    async (_, thunkAPI) => {
        const Axios = AxiosBase();
        return apiRequest(Axios.get('api/v1/products'), thunkAPI)
    });

// export const searchProducts = createAsyncThunk("product/search",
//     async (searched, thunkAPI) => {
//         const Axios = await AxiosBase();
//         const { search, type, idd, no, category_id } = searched
//         return apiRequest(Axios.get(`api/v1/search_result?q=${search}&category_id=${category_id}&type=${type}&option=${idd}&page=${no}`), thunkAPI)
//     });
export const searchProducts = createAsyncThunk("product/search",
    async (params, thunkAPI) => {
        const Axios = await AxiosBase();
        const { search, no, id, sort, pack, type, option } = params
        
        return apiRequest(Axios.get(`api/v1/search_result?q=${search}&page=${no}&category_id=${id}&sort_by=${sort}&pack_style=${pack}&type=${type}&option=${option}`), thunkAPI)
    
    });


export const searchProductsByItems = createAsyncThunk("product/type-head",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_products_typeahead?q=${search}`), thunkAPI)
    });

export const productNotification = createAsyncThunk("product/notification",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/products/${id}/notify`), thunkAPI)
    });

    export const listNewProducts = createAsyncThunk("product/new_product",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/new_products?limit=20'), thunkAPI)
    });
    
    export const listPopularProducts = createAsyncThunk("product/popular",
        async (_, thunkAPI) => {
            const Axios = await AxiosBase();
            return apiRequest(Axios.get('api/v1/popular_products'), thunkAPI)
        });
    
    export const getBackInStockProduct = createAsyncThunk("product/backInStock",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/back_in_stock_products?limit=20`), thunkAPI)
    });
    
    export const getKessingtonProduct = createAsyncThunk("product/kessingtonProduct",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/kessington_products?limit=20`), thunkAPI)
    });
    export const searchKeyWords = createAsyncThunk("product/keyword",
    async (search, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/search_tags?q=${search}`), thunkAPI)
    });
   