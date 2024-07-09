import { createSlice } from "@reduxjs/toolkit";
import {interestList,avartarList,registerUser,unFollowUser, followUser, countryCodeList,login,register, getUser, updateUserPassword,forgotPin,getPhoneVerificationPin,verifyPin, checkEmailDetails, updateUserDetails,checkPhoneDetails, deleteUserAccount, updateUserImage,checkAddressDetails,agentAnalytics,agentCheckin,getAgentCheckinStatus,callHistoryLog,getUserInterest,addDescription,syncAppointmentDate,getUserById,getAvailableDate,getAvailableDateByUserId,createAppointment,addAppointmentMessage,avartarUpdate, getAppointments,getFollowers,getFollowing,getAppointment,getConsel,getMessages,updateAppointment,approveAppointment} from "@Request2/Auth";
import dict from "@Helper2/dict"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        interestListStatus:"idle",
        interestListData:{},
        avartarListStatus:"idle",
        availableDateStatus:"idle",
        availableDateErrors:{},
        availableDateData:{},
        interest:{},
        createApStatus:"idle",
        createApErrors:{},
        createApData:{},

        avartarUpdateStatus:"idle",
        avartarUpdateErrors:{},
        avartarUpdateData:{},

        getAppointmentStatus:"idle",
        getAppointmentErrors:{},
        getAppointmentData:{},

        addMessageStatus:"'idle",
        addMessageErrors:{},
        addMessageData:{},

        getFollowersStatus:"idle",
        getFollowersErrors:{},
        getFollowersData:{},

        appointmentStatus:"idle",
        appointmentData:{},
        appointmentErrors:{},
        appointmentDataMore:[],

        conselStatus:"idle",
        conselData:{},
        conselErrors:{},
        conselDataMore:[],


        messageStatus:"idle",
        messageData:{},
        messageErrors:{},

        updateAppointmentStatus :"idle",
        updateAppointmentErrors:{},
        updateAppointmentData:{},

        approveAppointmentStatus:"idle",
        approveAppointmentErrors:{},
        approveAppointmentData:{},


        userDateStatus:"idle",
        userDateData:{},
        userDateErrors:{},
        avartarListData :{},
        userIdStatus:"idle",
        userIdErrors:{},
        userIdData:{},
        descStatus:"idle",
        followStatus:"idle",
        unFollowStatus:"idle",
        interestStatus:"idle",
        syncStatus:"idle",
        syncErrors:{},
        syncData:{},
        followErrors:{},
        unfollowErrors:{},
        followData:{},
        descErrors:{},
        descData:{},
        unFollowData:{},
        user: {},
        status: "idle",
        deleteAccount: "idle",
        errors: {},
        interestErrors : {},
        checkInErrors:{},
        analyticsData:{},
        callHistoryStatus:"idle",
        analyticStatus:"idle",
        reset:"idle",
        callHistoryData:{},
        dailyCheckinStatus:"idle",
        pin: "idle",
        isLoading: "idle",
        update:  "idle",
        dailyCheckinData:{},
        myCheckInStatus:"idle",
        myCheckInData:{},

          // Login
      loginStatus: "idle",

       // CheckPhoneDetails
    checkPhoneStatus: "idle",

    // CheckDetEmailails
    checkEmailStatus: "idle",

    userStatus: "idle",
    userVerified: false,

    // checkAddressDetails
    checkAddressStatus: "idle",

    // Signup
    registerStatus: "idle",

    // User Agent
    userAgent: {},
    userAgentStatus: "idle",
      
 

     // Phone Verification
     phoneVerificationPin: "idle",

     // Verify Phone Pin
     phoneNumberVerfiedStatus: "idle",
     phoneNumberVerfied: false,

    // Country Code
    countryCodeStatus: "idle",
    countryCodeData: [],
    loggedIn: false

        


    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle"
            state.update = "idle"
            state.deleteAccount ="idle"
        },
        cleanSync:(state) => {
            state.syncStatus = "idle"
            state.syncErrors = {}
            state.syncData = {}
        },
        cleanCreateAppointment: (state) =>{
        state.createApStatus = "idle"
        state.createApErrors = {}
        state.createApData = {}
        },
        cleanAddMessage:(state) =>{
            state.addMessageStatus = "idle"
            state.addMessageErrors = {}
            state.addMessageData = {}
        },

        cleanGetFollowers :(state) => {
            state.getFollowersStatus="idle",
            state.getFollowersErrors={},
            state.getFollowersData={}
        },

        cleanGetAppointment :(state) => {
            state.appointmentStatus="idle",
            state.appointmentData={},
            state.appointmentError={},
            state.appointmentDataMore=[]
        },
        
        cleanGetConsel :(state) => {
            state.conselStatus="idle",
            state.conselData={},
            state.conselError={},
            state.conselDataMore=[]
        },

        cleanGetMessage :(state) => {
            state.messageStatus="idle",
            state.messageData={},
            state.messageError={}

        },
        
        cleanAppointmentList:(state) => {
            state.getAppointmentStatus = "idle"
            state.getAppointmentErrors = {}
            state.getAppointmentData = {}
        },
        cleanUpdateAppointment:(state) => {
            state.updateAppointmentStatus = "idle"
            state.updateAppointmentErrorw = {}
            state.updateAppointmentData = {}
        },

        
        cleanInterest: (state) => {
            state.errors = {}
            state.interestListStatus = "idle"
            state.interestListData = {}
           
        },
        cleanAvartar: (state) => {
            state.errors = {}
            state.avartarListStatus = "idle"
            state.avartarListData  = {}
           
        },
        cleanAvartarUpdate: (state) => {
            state.avartarUpdateErrors = {}
            state.avartarUpdateStatus = "idle"
            state.avartarUpdateData  = {}
           
        },
        
        cleanAvailableDate:(state) =>{
            state.availableDateStatus = "idle"
            state.availableDateData = {}
            state.availableDateErrors = {}
        },
        cleanUserAvailableDate:(state) =>{
            state.userDateStatus = "idle"
            state.userDateData = {}
            state.userDateErrors = {}
        },


        cleanAddDescription: (state) => {
            state.descErrors = {}
            state.descStatus = "idle"
            state.descData  = {}
           
        },
        cleanGetFollowing: (state) => {
            state.getFollowingErrors = {}
            state.getFollowingStatus = "idle"
            state.getFollowingData  = {}
           
        },
        cleanUserInterest:(state) =>{
            state.interestErrors = {}
            state.interestStatus = "idle"
            state.interest = {}
        },
        cleanFollowUser: (state) => {
            state.followErrors = {}
            state.followStatus = "idle"
            state.followData = {}  
        },
        
        cleanUnFollowUser: (state) => {
            state.unfollowErrors = {}
            state.unFollowStatus = "idle"
            state.unFollowData = {}  
        },
        
        cleanLoginStatus: (state) => {
            state.errors = {}
            state.loginStatus = "idle"
        },
        cleanUserIdStatus: (state) => {
            state.userIdErrors = {}
            state.userIdStatus = "idle"
            state.userIdData = {}
        },
        cleanRegisterStatus: (state) => {
            state.errors = {}
            state.registerStatus = "idle"
        },
        cleanCheckAddress: (state) => {
            state.checkAddressStatus = "idle"
            state.errors = {}
        },

        cleanAnalytics: (state) => {
            state.analyticStatus = "idle"
            state.analyticsData = {}
            state.errors = {}
        },

        cleanCheckPhone: (state) => {
            state.checkPhoneStatus = "idle"
            state.errors = {}
        },

        cleanCheckEmail: (state) => {
            state.checkEmailStatus = "idle"
            state.errors = {}
        },
        cleanCountryCodeStatus: (state) => {
            state.errors = {}
            state.countryCodeStatus = "idle"
        },
        getUserDetails: (state, { payload }) => {
            state.user = { ...state.user, ...payload }
        },
        cleanUserDetails: (state) => {
            state.user = {}
            state.errors = {}
            state.update = "idle"
        },
        cleanPhoneVerificationStatus: (state) => {
            state.errors = {}
            state.phoneVerificationPin = "idle"
        },
     
        logout(state) {
            state.status = "idle"
            state.isAuthenticated = false
            state.user = {}
            state.errors = {}
            state.pin = "idle"
            state.dailyCheckinStatus = "idle"
            state.deleteAccount = "idle"
            state.loggedIn = false
        
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.loginStatus = "pending";
                state.errors = {};
                state.user = {};
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isAuthenticated = true;
                state.errors = {};
            })
            
            .addCase(login.rejected, (state, { payload }) => {
                state.loginStatus = "failed";
                state.errors = payload;
                state.isAuthenticated = false
            })

            builder
            .addCase(interestList.pending, state => {
                state.interestListStatus = "pending";
                state.interestListData = [];
                state.errors = {};
            })
            .addCase(interestList.fulfilled, (state, { payload }) => {
                state.interestListStatus = "success";
                state.interestListData = payload;
            })
            .addCase(interestList.rejected, (state, { payload }) => {
                state.interestListStatus = "failed";
                state.errors = payload;
            })

           

            builder
            .addCase(avartarList.pending, state => {
                state.avartarListStatus = "pending";
                state.avartarListData = [];
                state.errors = {};
            })
            .addCase(avartarList.fulfilled, (state, { payload }) => {
                state.avartarListStatus = "success";
                state.avartarListData = payload;
            })
            .addCase(avartarList.rejected, (state, { payload }) => {
                state.avartarListStatus = "failed";
                state.errors = payload;
            })
            

        builder
            .addCase(getUser.pending, state => {
                state.status = "pending",
                state.errors = {},
                state.user = {};
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.user = payload;
                state.errors = {};
                state.loggedIn = true
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false
                state.user = {};
            })

        builder
            .addCase(updateUserPassword.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserPassword.fulfilled, (state) => {
                state.update = "success";
            })
            .addCase(updateUserPassword.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

        builder
            .addCase(forgotPin.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(forgotPin.fulfilled, (state) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(forgotPin.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(register.pending, state => {
                state.registerStatus = "pending";
                state.errors = {};
                state.user = {};
                state.isAuthenticated = false;
                state.userVerified = false;

            })
            .addCase(register.fulfilled, (state, action) => {
                state.registerStatus = "success";
                state.isAuthenticated = true;
                state.userVerified = action?.payload?.user.user_verified;
                // state.signedIn = true;
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.registerStatus = "failed";
                state.errors = payload;
            })



            builder
            .addCase(registerUser.pending, state => {
                state.registerStatus = "pending";
                state.errors = {};
                state.user = {};
                state.isAuthenticated = false;
                state.userVerified = false;

            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.registerStatus = "success";
                state.isAuthenticated = true;
                state.userVerified = action?.payload?.user.user_verified;
                state.phoneNumberVerfied = true
                // state.signedIn = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.registerStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(followUser.pending, state => {
                state.followStatus = "pending";
                state.likeErrors = {};
                state.followData = {}
            })
            .addCase(followUser.fulfilled, (state, action) => {
                state.followStatus = "success";
                state.followErrors = {}; 
                state.followData = action.payload

            })
            .addCase(followUser.rejected, (state, { payload }) => {
                state.followStatus = "failed";
                state.followErrors = payload;
                state.followData = {}
            })

            builder
            .addCase(unFollowUser.pending, state => {
                state.unFollowStatus = "pending";
                state.unfollowErrors = {};
                state.unFollowData = {}
            })
            .addCase(unFollowUser.fulfilled, (state, action) => {
                state.unFollowStatus = "success";
                state.unfollowErrors = {}; 
                state.unFollowData = action.payload

            })
            .addCase(unFollowUser.rejected, (state, { payload }) => {
                state.unFollowStatus = "failed";
                state.unfollowErrors = payload;
                state.unFollowData = {}
            })

            builder
            .addCase(getUserInterest.pending, state => {
                state.interestStatus = "pending";
                state.interest = {}
                state.interestErrors = {};
            })
            .addCase(getUserInterest.fulfilled, (state, {payload}) => {
                state.interestStatus = "success"; 
                state.interest = payload;
                state.interestErrors = {};
            })
            .addCase(getUserInterest.rejected, (state, { payload }) => {
                state.interestStatus = "failed";
                state.interest = {};
                state.interestErrors = payload;
            })


            builder
            .addCase(deleteUserAccount.pending, state => {
                state.deleteAccount = "pending";
                state.errors = {};
            })
            .addCase(deleteUserAccount.fulfilled, (state, {payload}) => {
                state.deleteAccount = "success";
                state.errors = {};
            })
            .addCase(deleteUserAccount.rejected, (state, { payload }) => {
                state.deleteAccount = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserImage.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserImage.fulfilled, (state, {payload}) => {
                
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserImage.rejected, (state, { payload }) => { 
                state.update = "failed";
                state.errors = payload;
            })


            builder
            .addCase(countryCodeList.pending, state => {
                state.countryCodeStatus = "pending";
                state.countryCodeData = [];
                state.errors = {};
            })
            .addCase(countryCodeList.fulfilled, (state, { payload }) => {
                state.countryCodeStatus = "success";
                state.countryCodeData = payload;
            })
            .addCase(countryCodeList.rejected, (state, { payload }) => {
                state.countryCodeStatus = "failed";
                state.errors = payload;
            })


        builder
        .addCase(checkPhoneDetails.pending, state => {
            state.checkPhoneStatus = "pending";
            state.errors = {};
        })
        .addCase(checkPhoneDetails.fulfilled, (state) => {
            state.checkPhoneStatus = "success";
        })
        .addCase(checkPhoneDetails.rejected, (state, { payload }) => {
            state.checkPhoneStatus = "failed";
            state.errors = payload;
        })


        builder
            .addCase(checkEmailDetails.pending, state => {
                state.checkEmailStatus = "pending";
                state.errors = {};
            })
            .addCase(checkEmailDetails.fulfilled, (state) => {
                state.checkEmailStatus = "success";
            })
            .addCase(checkEmailDetails.rejected, (state, { payload }) => {
                state.checkEmailStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(getPhoneVerificationPin.pending, state => {
                state.phoneVerificationPin = "pending";
                state.errors = {};
            })
     
            .addCase(getPhoneVerificationPin.fulfilled, (state, { payload }) => {   
                state.phoneVerificationPin = "success";
            })
            .addCase(getPhoneVerificationPin.rejected, (state, { payload }) => {
                state.phoneVerificationPin = "failed";
                state.errors = payload;
            })

            builder
            .addCase(verifyPin.pending, state => {
                state.errors = {};
                state.phoneNumberVerfiedStatus = "pending"
                state.phoneNumberVerfied = false
            })
            .addCase(verifyPin.fulfilled, (state) => {
                state.phoneNumberVerfiedStatus = "success"
                state.phoneNumberVerfied = true
            })
            .addCase(verifyPin.rejected, (state, { payload }) => {
                state.errors = payload;
                state.phoneNumberVerfiedStatus = "failed"
            })
            builder
            .addCase(checkAddressDetails.pending, state => {
                state.checkAddressStatus = "pending";
                state.errors = {};
            })
            .addCase(checkAddressDetails.fulfilled, (state) => {
                state.checkAddressStatus = "success";
            })
            .addCase(checkAddressDetails.rejected, (state, { payload }) => {
                state.checkAddressStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(agentAnalytics.pending, state => {
                state.analyticStatus = "pending";
                state.errors = {};
            })
            .addCase(agentAnalytics.fulfilled, (state, { payload }) => {
                state.analyticStatus = "success";
                state.analyticsData = payload;
            })
            .addCase(agentAnalytics.rejected, (state, { payload }) => {
                state.analyticStatus = "failed";
                state.errors = payload;
            })

            
            builder
            .addCase(getAgentCheckinStatus.pending, state => {
                state.myCheckInStatus = "pending";
                state.checkInErrors = {};
            })
          
                .addCase(getAgentCheckinStatus.fulfilled, (state, action) => {
                state.myCheckInStatus = "success";
                state.myCheckInData = action?.payload;
                
            })
            .addCase(getAgentCheckinStatus.rejected, (state, action)=> {
                state.myCheckInStatus = "failed";
                state.checkInErrors = action.payload;
              
            })
            
            builder
            .addCase(getUserById.pending, state => {
                state.userIdStatus = "pending";
                state.userIdErrors = {};
            })
          
                .addCase(getUserById.fulfilled, (state, action) => {
                state.userIdStatus = "success";
                state.userIdData = action?.payload;
                
            })
            .addCase(getUserById.rejected, (state, action)=> {
                state.userIdStatus = "failed";
                state.checkInErrors = action.payload;
               
            })
            

            builder
            .addCase(addDescription.pending, state => {
                state.descStatus = "pending";
                state.descErrors = {};
            })
          
                .addCase(addDescription.fulfilled, (state, action) => {
                state.descStatus = "success";
                state.descData = action?.payload;
                
            })
            .addCase(addDescription.rejected, (state, action)=> {
                state.descStatus = "failed";
                state.descErrors = action.payload;
            
            })
            


            builder
            .addCase(agentCheckin.pending, state => {
                state.dailyCheckinStatus = "pending";
                state.errors = {};
            })
            .addCase(agentCheckin.fulfilled, (state, { payload }) => {
                state.dailyCheckinStatus = "success";
                state.dailyCheckinData = payload;
            })
            .addCase(agentCheckin.rejected, (state, { payload }) => {
                state.dailyCheckinStatus = "failed";
                state.errors = payload;
            })

           
            builder
            .addCase( callHistoryLog.pending, state => {
                state.callHistoryStatus = "pending";
                state.errors = {};
            })
            .addCase( callHistoryLog.fulfilled, (state, { payload }) => {
                state.callHistoryStatus = "success";
                state.callHistoryData = payload;
            })
            .addCase( callHistoryLog.rejected, (state, { payload }) => {
                state.callHistoryStatus = "failed";
                state.errors = payload;
            })


            
            builder
            .addCase( syncAppointmentDate.pending, state => {
                state.syncStatus = "pending";
                state.syncErrors = {};
            })
            .addCase( syncAppointmentDate.fulfilled, (state, { payload }) => {
                state.syncStatus = "success";
                state.syncData = payload;
            })
            .addCase( syncAppointmentDate.rejected, (state, { payload }) => {
                state.syncStatus = "failed";
                state.syncErrors = payload;
            })


            builder
            .addCase(getAvailableDate.pending, state => {
                state.availableDateStatus = "pending";
                state.availableDateErrors = {};
            })
            .addCase(getAvailableDate.fulfilled, (state, { payload }) => {
                state.availableDateStatus = "success";
                state.availableDateData = payload;
            })
            .addCase(getAvailableDate.rejected, (state, { payload }) => {
                state.availableDateStatus = "failed";
                state.availableDateErrors = payload;
            })

            

            builder
            .addCase(getAvailableDateByUserId.pending, state => {
                state.userDateStatus = "pending";
                state.userDateErrors = {};
            })
            .addCase(getAvailableDateByUserId.fulfilled, (state, { payload }) => {
                state.userDateStatus = "success";
                state.userDateData = payload;
            })
            .addCase(getAvailableDateByUserId.rejected, (state, { payload }) => {
                state.userDateStatus = "failed";
                state.userDateErrors = payload;
            })


            

            builder
            .addCase(createAppointment.pending, state => {
                state.createApStatus = "pending";
                state.createApErrors = {};
            })
          
                .addCase(createAppointment.fulfilled, (state, action) => {
                state.createApStatus = "success";
                state.createApData = action?.payload;
                
            })
            .addCase(createAppointment.rejected, (state, action)=> {
                state.createApStatus = "failed";
                state.createApErrors = action.payload;
            
            })
            
            builder
            .addCase(addAppointmentMessage.pending, state => {
                state.addMessageStatus = "pending";
                state.addMessageErrors = {};
            })
          
                .addCase(addAppointmentMessage.fulfilled, (state, action) => {
                state.addMessageStatus = "success";
                state.addMessageData = action?.payload;
                
            })
            .addCase(addAppointmentMessage.rejected, (state, action)=> {
                state.addMessageStatus = "failed";
                state.addMessageErrors = action.payload;
            
            })


            

            builder
            .addCase(avartarUpdate.pending, state => {
                state.avartarUpdateStatus = "pending";
                state.avartarUpdateErrors = {};
            })
          
                .addCase(avartarUpdate.fulfilled, (state, action) => {
                state.avartarUpdateStatus = "success";
                state.avartarUpdateData = action?.payload;
                
            })
            .addCase(avartarUpdate.rejected, (state, action)=> {
                state.avartarUpdateStatus = "failed";
                state.avartarUpdateErrors = action.payload;
            
            })

            

            builder
            .addCase(getAppointments.pending, state => {
                state.getAppointmentStatus = "pending";
                state.getAppointmentErrors = {};
            })
          
                .addCase(getAppointments.fulfilled, (state, action) => {
                state.getAppointmentStatus = "success";
                state.getAppointmentData = action?.payload;
                
            })
            .addCase(getAppointments.rejected, (state, action)=> {
                state.getAppointmentStatus = "failed";
                state.getAppointmentErrors = action.payload;
            
            })

            

            builder
            .addCase(getFollowers.pending, state => {
                state.getFollowersStatus = "pending";
                state.getFollowersErrors = {};
            })
          
                .addCase(getFollowers.fulfilled, (state, action) => {
                state.getFollowersStatus = "success";
                state.getFollowersData = action?.payload;
                
            })
            .addCase(getFollowers.rejected, (state, action)=> {
                state.getFollowersStatus = "failed";
                state.getFollowersErrors = action.payload;
            
            })

            builder
            .addCase(getFollowing.pending, state => {
                state.getFollowingStatus = "pending";
                state.getFollowingErrors = {};
            })
          
                .addCase(getFollowing.fulfilled, (state, action) => {
                state.getFollowingStatus = "success";
                state.getFollowingData = action?.payload;
                
            })
            .addCase(getFollowing.rejected, (state, action)=> {
                state.getFollowersStatus = "failed";
                state.getFollowingErrors = action.payload;
            
            })

            

            builder
            .addCase(getAppointment.pending, state => {
                state.appointmentStatus = "pending";
                state.appointmentErrors = {};
            })
          
                .addCase(getAppointment.fulfilled, (state, action) => {
                state.appointmentStatus = "success";
                state.appointmentData = action?.payload;
                state.appointmentDataMore = dict(state?.appointmentDataMore, action.payload.data);
                state.appointmentErrors = {};
                
            })
            .addCase(getAppointment.rejected, (state, action)=> {
                state.appointmentStatus = "failed";
                state.appointmentErrors = action.payload;
            
            })


            builder
            .addCase(getConsel.pending, state => {
                state.conselStatus = "pending";
                state.conselErrors = {};
            })
          
                .addCase(getConsel.fulfilled, (state, action) => {
                state.conselStatus = "success";
                state.conselData = action?.payload;
                state.conselDataMore = dict(state?.conselDataMore, action.payload.data);
                state.conselErrors = {};
                
            })
            .addCase(getConsel.rejected, (state, action)=> {
                state.conselStatus = "failed";
                state.conselErrors = action.payload;
            
            })


            builder
            .addCase(getMessages.pending, state => {
                state.messageStatus = "pending";
                state.messageErrors = {};
            })
          
                .addCase(getMessages.fulfilled, (state, action) => {
                state.messageStatus = "success";
                state.messageData = action?.payload;
                state.messageErrors = {};
                
            })
            .addCase(getMessages.rejected, (state, action)=> {
                state.messageStatus = "failed";
                state.messageErrors = action.payload;
            
            })


            builder
            .addCase(updateAppointment.pending, state => {
                state.updateAppointmentStatus = "pending";
                state.updateAppointmentErrors = {};
            })
          
                .addCase(updateAppointment.fulfilled, (state, action) => {
                state.updateAppointmentStatus = "success";
                state.updateAppointmentData = action?.payload;
                state.updateAppointmentErrors = {};
                
            })
            .addCase(updateAppointment.rejected, (state, action)=> {
                state.updateAppointmentStatus = "failed";
                state.updateAppointmentErrors = action.payload;
            })
            

            builder
            .addCase(approveAppointment.pending, state => {
                state.approveAppointmentStatus = "pending";
                state.approveAppointmentErrors = {};
            })
          
                .addCase(approveAppointment.fulfilled, (state, action) => {
                state.approveAppointmentStatus = "success";
                state.approveAppointmentData = action?.payload;
                state.approveAppointmentErrors = {};
                
            })
            .addCase(approveAppointment.rejected, (state, action)=> {
                state.approveAppointmentStatus = "failed";
                state.approveAppointmentErrors = action.payload;
            
            })
      
    }
});

export const { logout,cleanCountryCodeStatus,cleanUnFollowUser,cleanFollowUser,cleanInterest,cleanUserInterest,cleanAvartar, getUserDetails,cleanCheckAddress,cleanRegisterStatus, cleanCheckEmail,cleanPhoneVerificationStatus, cleanUserDetails,cleanCheckPhone, cleanLoginStatus, cleanup,cleanDisableAc,cleanAnalytics,cleanAddDescription,cleanSync,cleanUserIdStatus,cleanAvailableDate,cleanUserAvailableDate,cleanCreateAppointment,cleanAddMessage,cleanAvartarUpdate,cleanAppointmentList,cleanGetFollowers,cleanGetFollowing,cleanGetAppointment,cleanGetConsel,cleanGetMessage,cleanUpdateAppointment} = authSlice.actions

export default authSlice.reducer;