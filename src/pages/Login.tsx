import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      Login
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
