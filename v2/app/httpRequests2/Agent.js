import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const getAgent = createAsyncThunk("agent/count",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/agent'), thunkAPI)
    });

export const getAgentCustomer = createAsyncThunk("agent/customer",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/agent/customers'), thunkAPI)
    });

export const getAgentTransaction = createAsyncThunk("agent/transaction",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/agent/transactions/:${id}`), thunkAPI)
    });


    // this get agent manager
    export const getAgentManager = createAsyncThunk("agent/manager",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/agent/manager'), thunkAPI)
    });

 