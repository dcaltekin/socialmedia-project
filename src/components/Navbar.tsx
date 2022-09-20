import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  console.log(auth.currentUser?.displayName);
  const [user] = useAuthState(auth);
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/login"> Login</Link>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} />
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
