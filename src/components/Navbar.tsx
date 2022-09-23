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
    <div className="bg-gray-200">
      <div className="flex justify-between items-center container mx-auto gap-x-2 p-3">
        <div className="links">
          <Link to="/"> Home</Link>
          <Link to="/login"> Login</Link>
        </div>

        <div className="flex items-center gap-x-4">
          {user && (
            <>
              <span>{user?.displayName}</span>
              <img className="rounded-full h-14" src={user?.photoURL || ""} />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={logOut}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
