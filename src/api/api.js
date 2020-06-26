import axios from "axios";

const instance = axios.create({
  baseURL: "https://fir-auth-tutorial-9286b.firebaseio.com",
});

export const profileAPI = {
  // - pack for all methods to work with endPoints
  addProfile(newProfile, numberId) {
    //- GET returns PROMIS, we subscribe to ше with THEN
    return instance
      .post(
        "/profiles.json",
        { ...newProfile, number: numberId } // - and THEN returns other PROMIS
      )
      .then((response) => response.data); // - outside to US
  },

  changeProfile(name) {
    return instance
      .delete(`/profiles/${name}.json`)
      .then((response) => response.data);
  },

  deleteProfile(name) {
    return instance
      .delete(`/profiles/${name}.json`)
      .then((response) => response.data);
  },

  fetchProfiles() {
    return instance.get(`/profiles.json`).then((response) => response.data);
  },
};
