import React, { useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../aws/UserPool";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { CircularProgress, FormHelperText } from "@material-ui/core";
import { authStyles } from "./authStyles";


const Login = observer(() => {
  const navigate = useNavigate();
  const classes = authStyles();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("Qwerty!23");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("access"));
  const [isLoading, setIsLoading] = useState(false);
  const [errorField, setErrorField] = useState(false)

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        const accessToken = data.accessToken.jwtToken;
        localStorage.clear();
        localStorage.setItem("access", accessToken);
        setIsLogin(true);
        setIsLoading(false);
      },
      onFailure: (err) => {
        setIsLoading(false);
        setErrorField(true);
      },
    });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/app/weather");
    }
  }, [navigate, isLogin]);

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={classes.btn} type="submit">Login</button>
      </form>

      {errorField && (
        <FormHelperText style={{ color: 'red' }}>
          Incorrect username or password
        </FormHelperText>
      )}

      {
        isLoading ?
          <>
            <div className={classes.loading}>
              <CircularProgress color="inherit" className={classes.circle} />
            </div>
          </> : <></>
      }
    </div>
  );
});

export default Login;
