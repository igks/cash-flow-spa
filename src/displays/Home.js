import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const Home = () => {
  const dispatch = useDispatch();
  const doLogout = () => {
    logout(dispatch);
    localStorage.removeItem("token");
  };
  return (
    <div className="container">
      <div class="nav justify-content-end">
        <div onClick={() => doLogout()}>
          <p>Logout</p>
          <span class="oi oi-account-logout"></span>
        </div>
      </div>
      Home Component
    </div>
  );
};

export default Home;
