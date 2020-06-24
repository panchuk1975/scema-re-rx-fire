import { profileAPI } from "../api/api";
import {
  ADD_PROFILE,
  CHANGE_PROFILE,
  DELETE_PROFILE,
  FETCH_PROFILES,
} from "./types";

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

export const addProfileThunkCreator = (newProfile) => {
  return (dispatch) => {
    profileAPI.addProfile(newProfile).then((data) => {
      dispatch(addProfile(data));
    });
  };
};

const profileReduser = (state = profileInitialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profilesArray: [
          ...state.profilesArray,
          { ...action.newProfile, id: state.profilesArray.length + 1 },
        ],
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
        profilesArray: state.profilesArray.filter((p) => p.id !== action.id),
      };
    case FETCH_PROFILES:
      return state;
    default:
      return state;
  }
};

export default profileReduser;
