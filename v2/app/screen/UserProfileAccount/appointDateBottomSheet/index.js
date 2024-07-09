import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";
import {Calendar} from "react-native-calendars";
import Zcon from "react-native-vector-icons/MaterialIcons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { OnboardinBtn } from "@Component2";
import {
  getUser,
  getUserInterest,
  syncAppointmentDate,
  getAvailableDate,
} from "@Request2/Auth";
import { cleanSync, cleanAvailableDate } from "@Store2/Auth";
import LottieView from "lottie-react-native";
import moment from "moment"; // 2.20.1
import Loader from "@Screen2/loader";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const _maxDate = moment().add(100, "days").format(_format);

const AppointmentDateBottomSheet = (props) => {
  const dispatch = useDispatch();
  const {
    user,
    syncStatus,
    syncErrors,
    availableDateStatus,
    availableDateData,
    availableDateErrors,
    syncData,
  } = useSelector((state) => state.auth);
  const item = user;
  const [showSuccess, setShowSuccess] = useState(false);
  const [fetchResult, setFetchResult] = useState([]);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [listData, setListData] = useState([]);

  const [_markedDates, setMarkedDates] = useState([_today]);
  const [selectedDates, setSelectdates] = useState([]);
  const onDaySelect = (day) => {
    let temp = [...selectedDates];
    const _selectedDay = moment(day.dateString && day.dateString).format(_format);

    let selected = true;
    if (_markedDates[_selectedDay]) {
      delete temp[_selectedDay];
      selected = !_markedDates[_selectedDay].selected;
    } else {
      temp.push(_selectedDay);
      setSelectdates(temp);
    }
    const updatedMarkedDates = {
      ..._markedDates,
      ...{ [_selectedDay]: { selected } },
    };

    setMarkedDates(updatedMarkedDates);


  };

  // this is the code to add the selected true
  const objectOutput = {};
  listData && listData?.forEach((element) => {
    objectOutput[element] = {
      selected: true,
      selectedColor: "rgba(22, 160, 133, 1)",
    };
  });

  const pickedDated = (day) => {
    let checker = (availableDateData?.available_dates) && Object?.values(availableDateData?.available_dates)?.includes(
      day?.dateString
    );

    if (checker) {
      setShowCalendar(false);
      // setNoteDate(day?.dateString)
    } else {
      // setNoteDate("")
      setErrMsg("Please select a date you checked in");
      setTimeout(() => {
        setErrMsg(null);
      }, 3000);
    }
    setShowCalendar(false);
  };

  const MyCalendar = (props) => {
    return (
      <Calendar
        current={'2024-06-23'}
        initialDate={startDate}
        minDate={startDate}
        maxDate={endDate}
        disableAllTouchEventsForDisabledDays={true}
        markedDates={objectOutput}
        {...props}
      />
    );
  };

  useEffect(() => {
    if (availableDateStatus === "success") {
      setListData(availableDateData?.available_dates);
      setStartDate(availableDateData?.available_dates[0]);
      setEndDate(availableDateData?.available_dates?.slice(-1)[0]);
    }
  }, [availableDateStatus]);

  const submit = () => {
    setShowCalendar(!showCalendar);
  };

  const syncDate = () => {
    setLoader(true);
    const selectedDays = [];

    const formData = new FormData();

    const resp = Object.entries(_markedDates).filter(([key, value]) => {
      if (value.hasOwnProperty("selected")) {
        if (value.selected === true) {
          formData.append("available_dates[]", key);
          selectedDays.push(key);
          // setFetchResult(formData)
        }
      }
    });

    let arrayData = selectedDays;
    let i = 0;
    let stringArrayData = "";
    for (i = 0; i < arrayData.length; i++) {
      stringArrayData += `&available_dates[]=${arrayData[i]}`;
      setFetchResult(stringArrayData);
      // console.log("the araaay new", stringArrayData)
      console.log("the araaay odimnobi ...", stringArrayData);
      dispatch(syncAppointmentDate({ date: stringArrayData }));
    }
  };

  
  useEffect(() => {
    dispatch(getAvailableDate());
  }, []);

  useEffect(() => {
    if (syncStatus === "failed") {
      setLoader(false);
    } else if (syncStatus === "success") {
      dispatch(cleanAvailableDate());
      dispatch(getAvailableDate());
      setLoader(false);
      setShowSuccess(true);

      setSelectdates([]);
      setMarkedDates([]);
      setShowCalendar(false);
      props.close();

      setTimeout(function () {
        setLoader(false);
        dispatch(cleanSync());
      }, 4000);
    }
  }, [syncStatus]);


  return (
    <BottomSheet
      sheetBackgroundColor="#fff"
      hasDraggableIcon
      ref={props.bottomSheetRefStart}
      height={580}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.bottomSheet}>
          <View style={styles.topContainer}>
            <Image
              style={styles.userImg}
              source={{
                uri:
                  item?.avatar?.url !== ""
                    ? `${Config?.IMG_URL}${item?.avatar?.url}`
                    : null,
              }}
              resizeMode="cover"
            />
            {/* <Image  source={item.poster_img} style={styles.userImg} /> */}
            <Image
              style={styles.verImg}
              source={require("@Assets2/image/verified.png")}
            />
            <Text style={styles.userName}>{item?.username}</Text>
            {/* {item?.interests.map(function(d, idx){
                            return (<Text key={idx}>{d.name}</Text>)
                          })} */}
          </View>

          <View>
            {!showCalendar ? (
              <>
                <View style={styles.midContainer}>
                  <Text style={styles.issueDate}>My Calendar</Text>
                </View>
                <MyCalendar onDayPress={(day) => pickedDated(day)} />
                <View style={styles.filterBtn}>
                  <OnboardinBtn
                    title="UPDATE CALENDAR"
                    backgroundColor="#99cb01"
                    color="#fff"
                    onPress={submit}
                    // disabled={!props.periodId.length && !props.trackId.length}
                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                  />
                </View>
              </>
            ) : (
              <View>
                <View style={styles.midContainer}>
                  <Text style={styles.issueDate}>Update Calendar</Text>
                </View>
                {syncStatus != "success" ? (
                  <Calendar
                    // minDate={Date.now()}
                    minDate={_today}
                    maxDate={_maxDate}
                    onDayPress={onDaySelect}
                    markedDates={_markedDates}
                  />
                ) : (
                  <View style={styles.calendarCover}>
                    <LottieView
                      source={require("../../../asset/image/calendar.json")}
                      autoPlay
                      loop
                      // source={require('../../../asset/image/96957-lock.json')}

                      style={styles.successImg}
                    />
                    <Text style={styles.calendarText}>
                      Calendar Update Successful
                    </Text>
                  </View>
                )}

                {syncStatus != "success" ? (
                  <>
                    {!loader ? (
                      <TouchableOpacity
                        style={styles.confirmCover}
                        onPress={syncDate}
                      >
                        <Text style={styles.confirmText}>SYNC DATES</Text>
                        <Icon name="calendar-check" size={16} color="#fff" />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.generatingDownload}>
                        <ActivityIndicator size="large" color="orange" />
                        <Text style={styles.generatingDownloadText}>
                          {" "}
                          Syncing Calendar ...
                        </Text>
                      </TouchableOpacity>
                    )}
                  </>
                ) : null}
              </View>
            )}
          </View>
        </View>

        {errMsg && (
          <View style={styles.errView}>
            <Zcon name="error-outline" size={22} color="#fff" />
            <Text style={styles.errText}>{errMsg}</Text>
          </View>
        )}

        {successMsg ? (
          <View style={styles.toastCover}>
            <View style={styles.sucView}>
              <Icon name="email-check-outline" size={22} color="#fff" />
              <Text style={styles.errText}>{successMsg}</Text>
            </View>
          </View>
        ) : null}
      </View>
    </BottomSheet>
  );
};

export default AppointmentDateBottomSheet;
