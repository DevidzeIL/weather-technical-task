import React, { useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../aws/UserPool";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";


const Login = observer(() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("Qwerty!23");
  const [isLogin, setIsLogin] = useState(false)

  const onSubmit = (e) => {
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
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
    });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/app/weather");
    }
  }, [navigate, isLogin]);

  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
});

export default Login;
