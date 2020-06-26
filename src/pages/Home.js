import React, { useEffect } from "react";
import Profile from "../components/Profile";

const Home = ({
  profilesArray,
  newProfile,
  changeProfile,
  addProfileThunkCreator,
  deleteProfileThunkCreator,
  fetchProfilesThunkCreator,
}) => {
  useEffect(() => {
    fetchProfilesThunkCreator();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Profile
        profilesArray={profilesArray}
        newProfile={newProfile}
        changeProfile={changeProfile}
        addProfileThunkCreator={addProfileThunkCreator}
        deleteProfileThunkCreator={deleteProfileThunkCreator}
      />
    </div>
  );
};

export default Home;
