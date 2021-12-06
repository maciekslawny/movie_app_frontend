import React, { useContext } from "react";
import AuthContext from "../utils/AuthContext";
import TopBar from "./TopBar";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <TopBar />
        <form onSubmit={loginUser}>
          <input type="text" name="email" placeholder="Enter email" />
          <input type="text" name="password" placeholder="Enter password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
