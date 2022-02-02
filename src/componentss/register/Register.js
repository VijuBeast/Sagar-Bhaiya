import React, { useState } from "react";
import "../../App.css";
import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@mui/material/Button";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("admin", username);
    localStorage.setItem("admin", password);
    if (username === "admin" && password === "admin") {
      console.log("login success");
      window.location.href = "/dashboard";
    } else {
      console.log("Login Failed");
      setError("Invalid Credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <p>I am a register page hello sagar bhai<b>admin</b> Password: <b>admin</b></p>
      <FormControl margin="dense">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          type="text"
          id="username"
          aria-describedby="my-helper-text"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <br />
      <FormControl margin="dense">
        <InputLabel htmlFor="passsword">Password</InputLabel>
        <Input
          type="password"
          id="password"
          aria-describedby="my-helper-text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <p>{error}</p>
      <br />
      <Button variant="outlined" type="submit" className="btn btn-primary">
        Submit
      </Button>
    </form>
    // <div className="form-container">
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Enter username"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="Enter password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <p>{error}</p>
    //     <Button variant="outlined" type="submit" className="btn btn-primary">
    //       Submit
    //     </Button>
    //   </form>
    // </div>
//     MOM

// // 1. From today tasks completed login and dashboard view.
// // 2. After review call
// // 2.1 Have to get data through api.
// // 3. Role and Group both come from localStorage through web api.
// // 4. Tomorrow I'll cover above review call feedback and I'll work node to create api.

  );
};

export default Login;
