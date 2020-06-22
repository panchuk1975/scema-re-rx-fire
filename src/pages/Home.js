import React, { useEffect } from "react";
import Profile from "../components/Profile";

const Home = ({
  profilesArray,
  newProfile,
  addProfile,
  deleteProfile,
  changeProfile,
}) => {
  return (
    <div>
      <Profile
        profilesArray={profilesArray}
        newProfile={newProfile}
        addProfile={addProfile}
        deleteProfile={deleteProfile}
        changeProfile={changeProfile}
      />
    </div>
  );
};

export default Home;
