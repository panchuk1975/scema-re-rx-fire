import Home from "../pages/Home";
import { connect } from "react-redux";
import {
  changeProfile,
  addProfileThunkCreator,
  deleteProfileThunkCreator,
  fetchProfilesThunkCreator, 
} from "../redux/profileReducer";

let mapStateToProps = (state) => {
  return {
    profilesArray: state.profiles.profilesArray,
    newProfile: state.profiles.newProfile,
  };
};

let HomeConteiner = connect(mapStateToProps, {
  changeProfile,
  addProfileThunkCreator,
  deleteProfileThunkCreator,
  fetchProfilesThunkCreator,
})(Home);
export default HomeConteiner;
