import { MuiThemeProvider, createTheme } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#121212",
    },
  },
});
const Login = (props) => {
  const login = "http://localhost:5000/UserAuth";
  const classes = useStyles(props);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    console.log(userData);
    axios
      .post(login, userData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data["access"]);
          localStorage.setItem("refreshToken", response.data["refresh"]);
          console.log(response.status);
          console.log(response.data);
          console.log("access", response.data["access"]);
          console.log("refresh", response.data["refresh"]);
          console.log("local storage", localStorage.getItem("access"));
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
          // setErrors(true);
          // setErrorMsg(error.response.data.detail);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  return (
    <Grid container className={classes.root} item xs={12} md={5}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              color="primary"
              margin="normal"
              required
              fullWidth
              name="username"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              autoComplete="off"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Grid>
      </MuiThemeProvider>
    </Grid>
  );
};

export default Login;
