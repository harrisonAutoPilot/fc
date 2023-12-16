import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const getStore = createAsyncThunk("store/all",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/agent/stores'), thunkAPI)
   });

export const getUserStore = createAsyncThunk("store/user",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase(); 
      return apiRequest(Axios.get(`api/v1/agent/customers/${id}/stores`), thunkAPI)
      // return apiRequest(Axios.get(`api/v1/stores/users/${id}`), thunkAPI)
   });

export const getPendingUserStore = createAsyncThunk("store/pending_user",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/agent/customers/${id}/stores`), thunkAPI)
   });

export const deleteStore = createAsyncThunk("store/update",
   async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.delete(`api/v1/stores/${id}`), thunkAPI)
   });

   export const getVerifiedStore = createAsyncThunk("store/verified",
   async (_, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get('api/v1/verified_stores'), thunkAPI)
   });


// this is the create store for v2
export const createStoreV2 = createAsyncThunk("store/create/mobile",
async (data, thunkAPI) => {
   const formData = new FormData();
   for ( var key in data ) {
      if(typeof(data[key])==='object'){
         for(var key2 in data[key]){
            formData.append(key+"[]", data[key][key2]);
         }
      }
      else {
         formData.append(key, data[key]);
      }
     
   }

   const Axios = await AxiosBase();
   return apiRequest(Axios.post('api/v1/mobile_phone_store', formData, {
       headers: {
            'Content-Type': 'multipart/form-data',
       },
   }   
  ),
   thunkAPI)

});

// this is to visit store
export const visitStore = createAsyncThunk("visit/store",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/agent/visits/checkin', data), thunkAPI)
    });


   //  this is to leave the visited store
export const leaveVisitedStore = createAsyncThunk("leave/store",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/agent/visits/checkout', data), thunkAPI)
    });

   // this is to get the agent stores
export const getAgentStores = createAsyncThunk("agent/stores",
      async (_, thunkAPI) => {
         const Axios = await AxiosBase();
         return apiRequest(Axios.get('api/v1/agent/stores'), thunkAPI)
   });

    

  //  this is to get the current visted store data
export const currentVisitedStore = createAsyncThunk("current/visited",
async (_, thunkAPI) => {
   const Axios = await AxiosBase();
   return apiRequest(Axios.get('api/v1/agent/visits/latest'), thunkAPI)
});

// this is to pass the cordinate

export const updateCustomerStoreCord = createAsyncThunk("store/update/cord",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`stores/${data.id}/location/update`, data),
            thunkAPI)
    });
