import { createSlice} from "@reduxjs/toolkit";
import { getAgent, getAgentCustomer, getAgentTransaction,getUser,getAgentManager} from "@Request2/Agent";

export const agentSlice = createSlice({
    name: "agent",
    initialState: {
        agent: {},
        status: "idle",
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
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAgent.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.agent = {};
                state.loaded = "pending"
            })
            .addCase(getAgent.fulfilled, (state, action) => {
                state.agent = action.payload;
                state.status = "success";
                state.errors = {};
                state.loaded = "success";
            })
            .addCase(getAgent.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.agent = {};
                state.loaded = "failed";
            })

            // builder
            // .addCase(getUser.pending, state => {
            //     state.errors = {};
            //     state.user = {};
            //     state.userStatus = "pending";

            // })
            // .addCase(getUser.fulfilled, (state, { payload }) => {
            //     state.user = payload;
            //     state.userVerified = payload?.user_verified;
            //     state.userStatus = "success";
            //     state.phoneNumberVerfied = payload?.phone_verified
            // })
            // .addCase(getUser.rejected, (state, { payload }) => {
            //     state.errors = payload;
            //     state.userStatus = "failed";
            //     state.isAuthenticated = false

            // })


            builder
            .addCase(getAgentCustomer.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.customer = []
            })
            .addCase(getAgentCustomer.fulfilled, (state, action) => {
                state.status = "success";
                state.errors = {}; 
                state.customer = action.payload

            })
            .addCase(getAgentCustomer.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.customer = []
            })

            builder
            .addCase(getAgentTransaction.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.transaction = []
            })
            .addCase(getAgentTransaction.fulfilled, (state, action) => {
                state.status = "success";
                state.errors = {}; 
                state.transaction = action.payload

            })
            .addCase(getAgentTransaction.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.transaction = []
            })


        
            builder
            .addCase(getAgentManager.pending, state => {
                state.managerStatus = "pending";
                state.errors = {};
                state.manager = {}
            })
            .addCase(getAgentManager.fulfilled, (state, action) => {
                state.managerStatus = "success";
                state.errors = {}; 
                state.manager = action.payload

            })
            .addCase(getAgentManager.rejected, (state, { payload }) => {
                state.managerStatus = "failed";
                state.errors = payload;
                state.manager = {}
            })
    }

});

export const { cleanup } = agentSlice.actions

export default agentSlice.reducer;