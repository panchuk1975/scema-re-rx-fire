import { createSelector } from "reselect";

//--------------------Simply Selectors--------------------//
const getProfilesArray = (state) => {
  return state.profiles.profilesArray;
};

export const getNewProfile = (state) => {
  return state.profiles.newProfile;
};

//-----------Use CreateSelector from "reselect"------------//
export const getProfilesArraySelector = createSelector(
  getProfilesArray,
  (profilesArray) => {
    // something to do with array
    return profilesArray;
  }
);
