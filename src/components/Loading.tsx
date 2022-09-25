import React from "react";

function Loading() {
  return (
    <div>
      {" "}
      <div className="grid place-content-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
}

export default Loading;
