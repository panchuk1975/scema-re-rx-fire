import Home from "../pages/Home";
import { connect } from "react-redux";
import {
  changeProfile,
  addProfileThunkCreator,
  deleteProfileThunkCreator,
  fetchProfilesThunkCreator,
} from "../redux/profileReducer";
import Rainbow from "../hocs/Rainbow";
import { compose } from "redux";
import { getProfilesArraySelector, getNewProfile } from "../redux/selectors";

let mapStateToProps = (state) => {
  return {
    profilesArray: getProfilesArraySelector(state),
    newProfile: getNewProfile(state),
  };
};

let HomeConteiner = compose(
  Rainbow,
  connect(mapStateToProps, {
    changeProfile,
    addProfileThunkCreator,
    deleteProfileThunkCreator,
    fetchProfilesThunkCreator,
  })
)(Home);
export default HomeConteiner;
