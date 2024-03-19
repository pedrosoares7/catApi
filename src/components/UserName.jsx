import { React, useContext, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const UserName = () => {
  const { user, handleSubmitName } = useContext(UserContext);
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  const userNameHandler = (event) => {
    event.preventDefault();
    handleSubmitName(userName);
    console.log(userName);
    navigate("../home");
  };

  if (user) {
    return <div>You are logged in as {user}</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={userNameHandler} style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UserName;
