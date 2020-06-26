import { profileAPI } from "../api/api";
import {
  ADD_PROFILE,
  CHANGE_PROFILE,
  DELETE_PROFILE,
  FETCH_PROFILES,
} from "./types";

//-------------------------Initial State--------------------------//
let profileInitialState = {
  profilesArray: [],
  newProfile: {
    firstName: "",
    secondName: "",
    dateOfBirth: "",
    email: "",
    photo: null,
    status: "",
  },
};

//------------------------Actions Creators-------------------------//
export const addProfile = (newProfile) => ({
  type: ADD_PROFILE,
  newProfile,
});

export const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  id,
});

export const changeProfile = (newProfile, id) => ({
  type: CHANGE_PROFILE,
  newProfile,
  id,
});

export const fetchProfiles = (payload) => ({
  type: FETCH_PROFILES,
  payload,
});

//------------------------Thunks Creators--------------------------//
export const addProfileThunkCreator = (newProfile, numberId) => {
  return (dispatch) => {
    profileAPI.addProfile(newProfile, numberId).then((data) => {
        console.log(numberId)
      dispatch(addProfile({ ...newProfile, number: numberId, id: data.name }));
    });
  };
};

export const changeProfileThunkCreator = (newProfile, id) => {
  return (dispatch) => {
    profileAPI.changeProfile(newProfile, id).then((data) => {
      dispatch(
        changeProfile(newProfile, id)
      );
    });
  };
};

export const deleteProfileThunkCreator = (id) => {
  return (dispatch) => {
    profileAPI.deleteProfile(id).then((data) => {
      dispatch(deleteProfile(id));
    });
  };
};

export const fetchProfilesThunkCreator = () => {
  return (dispatch) => {
    profileAPI.fetchProfiles().then((data) => {
      if (!data) {
        data = [];
      }
      const payload = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });
      dispatch(fetchProfiles(payload));
    });
  };
};

//-------------------------Reducer-------------------------------//
const profileReduser = (state = profileInitialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profilesArray: [...state.profilesArray, action.newProfile],
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        profilesArray: state.profilesArray
          .filter((p) => p.id !== action.id)
          .concat([{ ...action.newProfile, id: action.id }]),
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profilesArray: state.profilesArray.filter(
          (profile) => profile.id !== action.id
        ),
      };
    case FETCH_PROFILES:
      return {
        ...state,
        profilesArray: action.payload,
      };
    default:
      return state;
  }
};

export default profileReduser;
