import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";


export const getDeliveryOptions = createAsyncThunk("delivery_options/all",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v2/delivery_types?state=${id}`), thunkAPI)
    });
