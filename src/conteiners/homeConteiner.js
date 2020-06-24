import Home from "../pages/Home";
import { connect } from "react-redux";
import {
  addProfile,
  deleteProfile,
  changeProfile,
  addProfileThunkCreator,
} from "../redux/profileReducer";

let mapStateToProps = (state) => {
  return {
    profilesArray: state.profiles.profilesArray,
    newProfile: state.profiles.newProfile,
  };
};

let HomeConteiner = connect(mapStateToProps, {
  addProfile,
  deleteProfile,
  changeProfile,
  addProfileThunkCreator,
})(Home);
export default HomeConteiner;
