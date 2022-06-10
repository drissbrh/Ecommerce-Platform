import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileScreen.css";
import patientPic from "../assets/julia.jpg";

//import { USER_UPDATE_PROFILE_RESET } from "../redux/constants/userConstants";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { userInfo, success, error, loading } = userUpdateProfile;

  const userDetails = useSelector((state) => state.userDetails);
  const {
    user,
    error: userDetailsError,
    loading: userDetailsLoading,
  } = userDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModification = () => {};
  return (
    <div className="profilescreen">
      <h2>My Info</h2>
      <form className="profile__elements" onSubmit={handleSubmit}>
        <div className="info__side">
          <h2>My personal info</h2>
          {user && (
            <>
              <div className="profile__details">
                <img src={patientPic} alt="profile pic" />
                <p>{user.name}</p>
              </div>
              <>
                <div className="name__section">
                  <label>Name</label>
                  <input
                    type="name"
                    placeholder={user.name}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="name__section">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder={user.email}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="name__section">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" onClick={handleModification}>
                  Update personal info
                </button>
                {success && (
                  <p className="updatedInfo__msg">
                    Your personal info are being updated
                  </p>
                )}
              </>
            </>
          )}
        </div>

        <div className="appts__side">
          <h2>My Orders</h2>
        </div>
      </form>
    </div>
  );
};

export default ProfileScreen;
