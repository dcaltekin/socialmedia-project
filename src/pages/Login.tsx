import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
function Login() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div className="mt-4 text-center">
      <h2>-Login Page-</h2>
      {user ? (
        <p>{user?.displayName}</p>
      ) : (
        <button
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={signIn}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Login;
