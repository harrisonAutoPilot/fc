import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";


export const getNewProducts = createAsyncThunk("newProducts/all",
    async (no, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/new_products?page=${no}`), thunkAPI)
    });


;
