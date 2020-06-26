import React, { useState } from "react";
import s from "../styles/Profile.module.css";

const Profile = ({
  profilesArray,
  newProfile,
  changeProfile,
  addProfileThunkCreator,
  deleteProfileThunkCreator,
}) => {
  const [form, setForm] = useState({ ...newProfile });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.currentTarget.value });
  };
  let numberId = null;
  let i = 1;
  profilesArray.map((p) => {
    if (p.number !== i) {
      numberId = p.number - 1;
      return numberId;
    } else {
      numberId = profilesArray.length + 1;
    }
    i++;
    return p;
  });
  profilesArray.sort((a, b) => a.number - b.number);
  //console.log(profilesArray);
  return (
    <div>
      <h1 className={s.conteiner}>Profiles</h1>
      <form>
        <input
          type="text"
          className="formInput"
          placeholder="Ім'я"
          value={form.firstName}
          name="firstName"
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          className="formInput"
          placeholder="Призвіще"
          value={form.secondName}
          name="secondName"
          onChange={changeHandler}
          required
        />
      </form>
      <button onClick={() => addProfileThunkCreator(form, numberId)}>
        Submit
      </button>
      {profilesArray.map((profile) => {
        return (
          <div key={profile.number} className={s.profileConteiner}>
            <p>
              {profile.number}
              {"."} {profile.firstName} {profile.secondName}
            </p>
            <button onClick={() => deleteProfileThunkCreator(profile.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                changeProfile({ ...form, number: profile.number }, profile.id)
              }
            >
              Change
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
