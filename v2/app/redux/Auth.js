import { createSlice } from "@reduxjs/toolkit";
import {interestList,avartarList,registerUser,unFollowUser, followUser, countryCodeList,login,register, getUser, updateUserPassword,forgotPin,getPhoneVerificationPin,verifyPin, checkEmailDetails, updateUserDetails,checkPhoneDetails, deleteUserAccount, updateUserImage,checkAddressDetails,agentAnalytics,agentCheckin,getAgentCheckinStatus,callHistoryLog} from "@Request2/Auth";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        interestListStatus:"idle",
        interestListData:{},
        avartarListStatus:"idle",
        avartarListData :{},
        followStatus:"idle",
        unFollowStatus:"idle",
        followErrors:{},
        unfollowErrors:{},
        followData:{},
        unFollowData:{},
        user: {},
        status: "idle",
        deleteAccount: "idle",
        errors: {},
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





            // builder
            // .addCase(updateUserDetails.pending, state => {
            //     state.update = "pending";
            //     state.errors = {};
            // })
            // .addCase(updateUserDetails.fulfilled, (state, {payload}) => {
            //     state.update = "success";
            //     state.errors = {};
            // })
            // .addCase(updateUserDetails.rejected, (state, { payload }) => {
            //     state.update = "failed";
            //     state.errors = payload;
            // })

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
                console.log("the redux error for checkin",action.payload)
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

            
    }
});

export const { logout,cleanCountryCodeStatus,cleanUnFollowUser,cleanFollowUser,cleanInterest,cleanAvartar, getUserDetails,cleanCheckAddress,cleanRegisterStatus, cleanCheckEmail,cleanPhoneVerificationStatus, cleanUserDetails,cleanCheckPhone, cleanLoginStatus, cleanup,cleanDisableAc,cleanAnalytics } = authSlice.actions

export default authSlice.reducer;