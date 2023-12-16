import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";


export const getPopularProducts = createAsyncThunk("popular_products/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/popular_products?page=${no}`), thunkAPI)
    });



