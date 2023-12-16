import { createSlice } from "@reduxjs/toolkit";
import { getStore, deleteStore, createStoreV2, getUserStore,getVerifiedStore, getPendingUserStore, visitStore,leaveVisitedStore,currentVisitedStore, updateCustomerStoreCord,getAgentStores } from "@Request2/Store";

export const storeSlice = createSlice({
    name: "store",
    initialState: {
        stores: [],
        verifiedStores: [],
        agentStoreData:{},
        usersStore: [],
        storeStatus: "idle",
        storeUpdate:"idle",
        agentStoreStatus:"idle",
        agentStoreErrors:{},
        status: "idle",
        update: "idle",
        deletes: "idle",
        leaveStatus:"idle",
        currentStoreData:{},
        currentStatus:"idle",
        errors: {},
        cordErrors:{},
        leaveErrors:{},
        pending: {},
        pendingStatus: "idle",
        visitStatus:"idle"
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle",
            state.deletes = "idle",
            state.pending = {}
            state.pendingStatus = "idle"
             state.usersStore = []
        },
        cleanUpCurrentStore: (state) => {
            state.errors = {}
            state.currentStatus = "idle"
            state.currentStoreData = {}
        },
        cleanUpStore: (state) => {
            state.errors = {}
            // state.storeStatus = "idle"
        },
        cleanUpAgentStore:() =>{
            state.agentStoreErrors ={}
            state.agentStoreData = {}
            state.agentStoreStatus = "idle"
        },
        cleanLeaveStore: (state) => {
            state.leaveErrors = {}
            state.leaveStatus="idle"
        },
        cleanupDelete: (state) => {
            state.errors = {}
            state.update = "idle",
            state.deletes = "idle"
        },
        cleanUpVisitedStoreData: (state) => {
            state.errors = {}
            state. visitStatus = "idle"
        },
   
    },
    extraReducers: builder => {
        builder
            .addCase(getStore.pending, state => {
                state.storeStatus = "pending";
                state.errors = {};
                state.stores = [];
            })
            .addCase(getStore.fulfilled, (state, action) => {
                state.stores = action.payload;
                state.storeStatus = "success";
            })
            .addCase(getStore.rejected, (state, { payload }) => {
                state.storeStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(getUserStore.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.usersStore = [];
            })
            .addCase(getUserStore.fulfilled, (state, action) => {
                state.usersStore = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getUserStore.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.usersStore = [];
            })

            builder
            .addCase(getPendingUserStore.pending, state => {
                state.pendingStatus = "pending";
                state.errors = {};
                state.pending = {};
            })
            .addCase(getPendingUserStore.fulfilled, (state, action) => {
                state.pending = action.payload;
                state.pendingStatus = "success";
                state.errors = {};
            })
            .addCase(getPendingUserStore.rejected, (state, { payload }) => {
                state.pendingStatus = "failed";
                state.errors = payload;
                state.pending = {};
            })



        builder
            .addCase(deleteStore.pending, state => {
                state.deletes = "pending";
                state.errors = {};
            })
            .addCase(deleteStore.fulfilled, (state, action) => {
                state.deletes = "success";
                state.errors = {};
            })
            .addCase(deleteStore.rejected, (state, { payload }) => {
                state.deletes = "failed";
                state.errors = payload;
            })
            builder
            .addCase(getVerifiedStore.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.verifiedStores = [];
            })
            .addCase(getVerifiedStore.fulfilled, (state, action) => {
                state.verifiedStores = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(getVerifiedStore.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.verifiedStores = [];
            })

          
            builder
            .addCase(createStoreV2.pending, state => {
                state.createStore = "pending";
                state.errors = {};
            })
            .addCase(createStoreV2.fulfilled, (state, action) => {
                state.createStore = "success";
                state.errors = {};
            })
            .addCase(createStoreV2.rejected, (state, { payload }) => {
                state.createStore = "failed";
                state.errors = payload;
            })



            builder
            .addCase(visitStore.pending, state => {
                state.visitStatus = "pending";
                state.errors = {};
            })
            .addCase(visitStore.fulfilled, (state, action) => {
                state.visitStatus = "success";
            })
            .addCase(visitStore.rejected, (state, { payload }) => {
                state.visitStatus = "failed";
                state.errors = payload;
            })
            

            builder
            .addCase(leaveVisitedStore.pending, state => {
                state.leaveStatus = "pending";
                state.leaveErrors = {};
            })
            .addCase(leaveVisitedStore.fulfilled, (state, action) => {
                state.leaveStatus = "success";
                state.leaveErrors = {};
            })
            .addCase(leaveVisitedStore.rejected, (state, { payload }) => {
                state.leaveStatus = "failed";
                state.leaveErrors = payload;
            })

            


            builder
            .addCase(updateCustomerStoreCord.pending, state => {
                state.storeUpdate = "pending";
                state.cordErrors = {};
            })
            .addCase(updateCustomerStoreCord.fulfilled, (state, action) => {
                state.storeUpdate = "success";
                state.cordErrors= {};
            })
            .addCase(updateCustomerStoreCord.rejected, (state, { payload }) => {
                state.storeUpdate = "failed";
                state.cordErrors = payload;
            })

            

            .addCase(currentVisitedStore.pending, state => {
                state.currentStatus = "pending";
                state.errors = {};
                state.currentStoreData = {};
            })
            .addCase(currentVisitedStore.fulfilled, (state, action) => {
                state.currentStoreData = action.payload;
                state.currentStatus = "success";
            })
            .addCase(currentVisitedStore.rejected, (state, { payload }) => {
                state.currentStatus = "failed";
                state.errors = payload;
            })
            
            .addCase(getAgentStores.pending, state => {
                state.agentStoreStatus = "pending";
                state.agentStoreErrors = {};
                state.agentStoreData = {};
            })
            .addCase(getAgentStores.fulfilled, (state, action) => {
                state.agentStoreData = action.payload;
                state.agentStoreStatus = "success";
            })
            .addCase(getAgentStores.rejected, (state, { payload }) => {
                state.agentStoreStatus = "failed";
                state.agentStoreErrors = payload;
            })
            
    }
});

export const {cleanup,cleanUpStore, cleanupDelete,cleanUpCurrentStore,cleanUpAgentStore, cleanUpVisitedStoreData,cleanLeaveStore } = storeSlice.actions

export default storeSlice.reducer;