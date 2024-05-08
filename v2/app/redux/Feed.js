import { createSlice} from "@reduxjs/toolkit";
import {addFeed, getAllFeeds, likeFeed, unLikeFeed, getFeedComments,addFeedComment,getFeedById, deleteFeedMedia} from "@Request2/Feed";
import dict from "@Helper2/dict";
export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        agent: {},
        status: "idle",
        feedStatus:"idle",
        addFeedErrors:{},
        addFeedDetail:{},
        allFeedStatus:"idle",
        allFeedErrors:{},
        allFeedDataMore:[],
        allFeedData:{},

        deleteFeedStatus:"idle",
        deleteFeedErrors:{},
        deleteFeedData:{},

        feedIdStatus:"idle",
        feedIdErrors:{},
        feedIdData:{},
        likeStatus:"idle",
        likeData:{},
        likeErrors:{},
        unlikeStatus:"idle",
        unlikeData:{},
        unlikeErrors:{},

        feedCommentStatus:"idle",
        feedCommentData:{},
        feedCommentErrors:{},

        addCommentStatus:"idle",
        addCommentData:{},
        addCommentErrors:{},

        errors: {},
        customer: "idle",
        transaction : [],
        loaded: "idle",
        managerStatus:"idle",
        manager:{},
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle"
            state.managerStatus = "idle"
            state.manager = {}
        },
        cleanAddFeed: (state) => {
            state.addFeedErrors = {}
            state.feedStatus = "idle"
            state. addFeedDetail = {}
        },

        cleanDeleteFeed: (state) => {
            state.deleteFeedErrors = {}
            state.deleteFeedStatus = "idle"
            state. deleteFeedData = {}
        },
        cleanAllFeed: (state) => {
            state.allFeedErrors = {}
            state.allFeedStatus = "idle"
            state. allFeedData = {}
            state.allFeedDataMore = []
        },
        cleanFeedIdStatus: (state) => {
            state.feedIdErrors = {}
            state.feedIdStatus = "idle"
            state.feedIdData = {}
        },
        cleanFeedLike: (state) => {
            state.likeErrors = {}
            state.likeStatus = "idle"
            state.likeData = {}
        },
        cleanFeedUnLike: (state) => {
            state.likeErrors = {}
            state.unlikeStatus = "idle"
            state.unlikeData = {}
        },
        cleanFeedComment: (state) => {
            state.feedCommentErrors = {}
            state.feedCommentStatus = "idle"
            state.feedCommentData = {}
        },
        cleanAddComment: (state) => {
            state.addCommentErrors = {}
            state.addCommentStatus = "idle"
            state.addCommentData = {}
        }
        

    },
    extraReducers: builder => {

        builder
        .addCase(addFeed.pending, state => {
            state.feedStatus = "pending";
            state.addFeedErrors = {};
            state.addFeedDetail = {}
        })
        .addCase(addFeed.fulfilled, (state, action) => {
            state.feedStatus = "success";
            state.addFeedErrors = {}; 
            state.addFeedDetail = action.payload

        })
        .addCase(addFeed.rejected, (state, { payload }) => {
            state.feedStatus = "failed";
            state.addFeedErrors = payload;
            state.addFeedDetail = {}
        })




        builder
            .addCase(getAllFeeds.pending, state => {
                state.allFeedStatus = "pending";
                state.allFeedErrors = {};
                state.allFeedData = {};
                state.loaded = "pending"
            })
            .addCase(getAllFeeds.fulfilled, (state, action) => {
                state.allFeedData = action.payload;
                state.allFeedDataMore = dict(state.allFeedDataMore, action.payload.data);
                state.allFeedStatus = "success";
                state.allFeedErrors = {};
                state.loaded = "success";
            })
            .addCase(getAllFeeds.rejected, (state, { payload }) => {
                state.allFeedStatus = "failed";
                state.allFeedErrors = payload;
                state.allFeedData = {};
                state.loaded = "failed";
            })


            builder
            .addCase(likeFeed.pending, state => {
                state.likeStatus = "pending";
                state.likeErrors = {};
                state.likeData = []
            })
            .addCase(likeFeed.fulfilled, (state, action) => {
                state.likeStatus = "success";
                state.likeErrors = {}; 
                state.likeData = action.payload

            })
            .addCase(likeFeed.rejected, (state, { payload }) => {
                state.likeStatus = "failed";
                state.likeErrors = payload;
                state.likeData = []
            })

            builder
            .addCase(unLikeFeed.pending, state => {
                state.unlikeStatus = "pending";
                state.likeErrors = {};
                state.unlikeData = []
            })
            .addCase(unLikeFeed.fulfilled, (state, action) => {
                state.unlikeStatus = "success";
                state.likeErrors = {}; 
                state.unlikeData = action.payload

            })
            .addCase(unLikeFeed.rejected, (state, { payload }) => {
                state.unlikeStatus = "failed";
                state.likeErrors = payload;
                state.unlikeData = []
            })


            builder
            .addCase(getFeedComments.pending, state => {
                state.feedCommentStatus = "pending";
                state.feedCommentData = [];
                state.feedCommentErrors = {};
            })
            .addCase(getFeedComments.fulfilled, (state, { payload }) => {
                state.feedCommentStatus = "success";
                state.feedCommentData = payload;
                state.feedCommentErrors ={}
            })
            .addCase(getFeedComments.rejected, (state, { payload }) => {
                state.feedCommentStatus = "failed";
                state.feedCommentErrors = payload;
            })


            builder
            .addCase(addFeedComment.pending, state => {
                state.addCommentStatus = "pending";
                state.addCommentData = [];
                state.addCommentErrors = {};
            })
            .addCase(addFeedComment.fulfilled, (state, { payload }) => {
                state.addCommentStatus = "success";
                state.addCommentData = payload;
                state.addCommentErrors ={}
            })
            .addCase(addFeedComment.rejected, (state, { payload }) => {
                state.addCommentStatus = "failed";
                state.addCommentErrors = payload;
            })

 
            builder
            .addCase(getFeedById.pending, state => {
                state.feedIdStatus = "pending";
                state.feedIdErrors = {};
            })
          
                .addCase(getFeedById.fulfilled, (state, action) => {
                state.feedIdStatus = "success";
                state.feedIdData = action?.payload;
                
            })
            .addCase(getFeedById.rejected, (state, action)=> {
                state.feedIdStatus = "failed";
                state.feedIdErrors = action.payload;
               
            })


            builder
            .addCase(deleteFeedMedia.pending, state => {
                state.deleteFeedStatus = "pending";
                state.deleteFeedData = [];
                state.deleteFeedErrors = {};
            })
            .addCase(deleteFeedMedia.fulfilled, (state, { payload }) => {
                state.deleteFeedStatus = "success";
                state.deleteFeedData = payload;
                state.deleteFeedErrors ={}
            })
            .addCase(deleteFeedMedia.rejected, (state, { payload }) => {
                state.deleteFeedStatus = "failed";
                state.deleteFeedErrors = payload;
            })
            
        
    }

});

export const { cleanup,cleanAddFeed,cleanAllFeed,cleanFeedLike,cleanFeedUnLike,cleanFeedComment,cleanAddComment,cleanFeedIdStatus,cleanDeleteFeed} = feedSlice.actions

export default feedSlice.reducer;