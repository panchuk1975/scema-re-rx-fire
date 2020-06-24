import React from "react";
import Profile from "../components/Profile";

const Home = ({
  profilesArray,
  newProfile,
  addProfile,
  deleteProfile,
  changeProfile,
  addProfileThunkCreator,
}) => {
  return (
    <div>
      <Profile
        profilesArray={profilesArray}
        newProfile={newProfile}
        addProfile={addProfile}
        deleteProfile={deleteProfile}
        changeProfile={changeProfile}
        addProfileThunkCreator={addProfileThunkCreator}
      />
    </div>
  );
};

export default Home;
