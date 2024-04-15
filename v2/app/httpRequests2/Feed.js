import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "@Request2/AxiosBase";
import { apiRequest } from "@Request2/Request";


   export const addFeed = createAsyncThunk("user/feed",
   async (data, thunkAPI) => {

      const formData = new FormData();
    
      for ( var key in data ) {

         // if(typeof(data[key])==='object'){
         //    for(var key2 in data[key]){
         //       formData.append(key+"[]", data[key][key2]);
         //    }
         // }
         // else {
            formData.append(key, data[key]);
         
      }
  console.log("it got to the axios", formData)
      const Axios = await AxiosBase();
      return apiRequest(Axios.post('api/v1/feed/create', formData,{
          headers: {
               'Content-Type': 'multipart/form-data',
          },
      }
         
     ),
     thunkAPI)
   });


   export const getAllFeeds = createAsyncThunk("user/all/feeds",
      async (_, thunkAPI) => {
         const Axios = await AxiosBase();
         return apiRequest(Axios.get('api/v1/feeds?per_page=30'), thunkAPI)
      });

export const likeFeed = createAsyncThunk("user/feeds/like",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/feed/like/${id}`), thunkAPI)
    });


    export const unLikeFeed = createAsyncThunk("user/feeds/unlike",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/feed/unlike/${id}`), thunkAPI)
    });

  //this is the endpoint i use to get feed comments
  export const getFeedComments = createAsyncThunk("auth/post/comment",
  async (id, thunkAPI) => {
      const Axios = await AxiosBase();
      return apiRequest(Axios.get(`api/v1/feed/${id}/comments`), thunkAPI)
  });


  export const addFeedComment = createAsyncThunk("auth/add/comments",
  async (data, thunkAPI) => {
  const Axios = await AxiosBase();
  return apiRequest(Axios.post(`api/v1/feed/comment/add/${data.id}`, data),
      thunkAPI)
});


//     // this get agent manager
//     export const getAgentManager = createAsyncThunk("agent/manager",
//     async (_, thunkAPI) => {
//         const Axios = await AxiosBase();
//         return apiRequest(Axios.get('api/v1/agent/manager'), thunkAPI)
//     });

 