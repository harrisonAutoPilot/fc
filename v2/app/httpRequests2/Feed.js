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
      async (no, thunkAPI) => {
         const Axios = await AxiosBase();
         return apiRequest(Axios.get(`api/v1/feeds?per_page=5&page=${no}`), thunkAPI)
      });

export const likeFeed = createAsyncThunk("user/feeds/like",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.get(`api/v1/feed/like/${id}`), thunkAPI)
    });


    export const unLikeFeed = createAsyncThunk("user/feeds/unlike",
    async (id, thunkAPI) => {
        const Axios = await AxiosBase();
        return apiRequest(Axios.delete(`api/v1/feed/unlike/${id}`), thunkAPI)
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

export const getFeedById = createAsyncThunk("auth/feed/id",
async (details, thunkAPI) => {
    const {id, no} = details;
    const Axios = await AxiosBase();
    return apiRequest(Axios.get(`api/v1/feeds/user/${id}?per_page=5&page=${no}`), thunkAPI)
});

export const deleteFeedMedia = createAsyncThunk("auth/delete/media",
async (id, thunkAPI) => {
const Axios = await AxiosBase();
return apiRequest(Axios.delete(`api/v1/feed/delete/${id}`),
    thunkAPI)
});

 