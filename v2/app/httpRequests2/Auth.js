import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";

export const login = createAsyncThunk("auth/login",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/user/login', user),
            thunkAPI, "auth")
    });


    export const register = createAsyncThunk("auth/register",
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
       return apiRequest(Axios.post('api/v1/agents/register', formData,{
           headers: {
                'Content-Type': 'multipart/form-data',
           },
       }
          
      ),
      thunkAPI, "auth")
    });


        //this is the endpoint i use to get the list of interests
        export const interestList = createAsyncThunk("auth/user/interest",
        async (_, thunkAPI) => {
            const Axios = await AxiosBase();
            return apiRequest(Axios.get('api/v1/interests'), thunkAPI)
        });

    
    
        //this is the endpoint i use to get the list of vector avartar
        export const avartarList = createAsyncThunk("auth/user/avartar",
        async (_, thunkAPI) => {
            const Axios = await AxiosBase();
            return apiRequest(Axios.get('api/v1/avatars'), thunkAPI)
        });


  

        // this is the endpoint i use to register new users
        export const registerUser = createAsyncThunk("auth/create",
        async (values, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/user/create', values),
            thunkAPI, "auth")
    });


    export const followUser = createAsyncThunk("user/follow",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/user/follow/${id}`), thunkAPI)
    });


    export const unFollowUser = createAsyncThunk("user/unfollow",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/user/unfollow/${id}`), thunkAPI)
    });





export const getUser = createAsyncThunk("auth/user",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/user'), thunkAPI);
    });


export const getPhoneVerificationPin = createAsyncThunk("auth/phone_verification",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/user/verification_code/send'), thunkAPI);
    });


export const verifyPin = createAsyncThunk("auth/verify/pin",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/user/phone/verify', user), thunkAPI);
    });


export const activateAccount = createAsyncThunk("auth/activate_account",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/activate_account', user), thunkAPI);
    });

export const forgotPin = createAsyncThunk("auth/forgot_pin",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/users/pin/reset', user),
            thunkAPI)
    });


export const updateUserDetails = createAsyncThunk("auth/user/update",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.patch(`api/v1/users/${user.id}`, user),
            thunkAPI)
    });


export const deleteUserAccount = createAsyncThunk("auth/user/delete",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.patch(`api/v1/users/${id}/disable`),
            thunkAPI)
    });


export const updateUserPassword = createAsyncThunk("auth/password/update",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.patch(`api/v1/users/password/${user.id}`, user),
            thunkAPI)
    });


export const updateUserImage = createAsyncThunk("auth/image/update",
    async (user, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/users/upload-image/${user.id}`, user), thunkAPI)

    });


    // these are the newly added endpoints
    export const countryCodeList = createAsyncThunk("auth/login/code",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get('api/v1/countries'), thunkAPI)
    });


export const checkEmailDetails = createAsyncThunk("auth/register/verify/email",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/users/verify/email`, data), thunkAPI)
    });


export const checkPhoneDetails = createAsyncThunk("auth/register/verify/phone",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/users/verify/phone`, data), thunkAPI)
    });

export const checkAddressDetails = createAsyncThunk("auth/register/verify/address",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/stores/verify/address`, data), thunkAPI)
    });

// this is to get the Analytics
export const agentAnalytics = createAsyncThunk("auth/agent/analytics",
async (duration, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.get(`api/v1/agent/analytics?duration=${duration}`), thunkAPI)
});

// this is the endpoint where the user(agent) checking
export const agentCheckin = createAsyncThunk("auth/checkin",
    async (_, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post('api/v1/agent/checkins'),
            thunkAPI)
    });

 export const getAgentCheckinStatus = createAsyncThunk("auth/checkins/query",
    async (_, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.get('api/v1/agent/online'),
        thunkAPI)
});

export const callHistoryLog = createAsyncThunk("auth/call/history",
    async (data, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.post(`api/v1/call_logs/${data.id}`, data),
            thunkAPI)
    });
    