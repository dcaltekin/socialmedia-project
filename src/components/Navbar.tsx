import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Navbar() {
  const [user] = useAuthState(auth);
  const logOut = async () => {
    await signOut(auth);
    setCheck(false);
    setIcon(false);
  };
  const [check, setCheck] = useState(false);
  const [icon, setIcon] = useState(false);
  const dropdownControl = () => {
    setCheck(!check);
    setIcon(!icon);
  };

  return (
    <div className="bg-gray-200">
      <div className="flex justify-around items-center container mx-auto gap-x-2 p-3">
        <div className="flex gap-x-2">
          <Link to="/">Home</Link>
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/createpost">Create Post</Link>
          )}
        </div>
        <div></div>
        <div className="flex items-center gap-x-2 justify-center">
          {user && (
            <>
              <img
                className="rounded-full h-14"
                src={user.photoURL || ""}
                alt="profile"
              />
              <button onClick={dropdownControl}>
                {!icon ? (
                  <AiOutlineDown size={20} />
                ) : (
                  <AiOutlineUp size={20} />
                )}
              </button>
              <div
                className={
                  !check
                    ? "hidden"
                    : "flex flex-col absolute bg-gray-300 mt-44 gap-y-2  p-4 justify-center items-center transition-all z-50"
                }
              >
                {" "}
                <span>{user.displayName}</span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
