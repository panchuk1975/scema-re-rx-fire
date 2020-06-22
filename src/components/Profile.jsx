import React, { useState } from "react";
import s from "../styles/Profile.module.css";

const Profile = ({ profilesArray, newProfile, addProfile, deleteProfile, changeProfile }) => {
  const [form, setForm] = useState({ ...newProfile });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.currentTarget.value });
  };
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
        <button onClick={() => addProfile(form)}>Submit</button>
      {profilesArray.map((profile) => (
        <div key={profile.firstName} className={s.profileConteiner}>
          <p>
            {profile.id}
            {"."} {profile.firstName} {profile.secondName}
          </p>
          <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          <button onClick={() => changeProfile(form, profile.id)}>Change</button>
        </div>
      ))}
    </div>
  );
};

export default Profile;
