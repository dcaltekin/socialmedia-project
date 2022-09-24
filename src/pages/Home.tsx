import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div className="text-center mt-4">
      {user ? <div>Welcome {user.displayName}</div> : <div>Home Page</div>}
    </div>
  );
}

export default Home;
