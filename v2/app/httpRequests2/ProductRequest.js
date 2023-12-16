import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const productRequest = createAsyncThunk("product_request/all",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/product_requests', data), thunkAPI)
    });