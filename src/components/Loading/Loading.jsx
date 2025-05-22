import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-base-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      <p className="mt-4 text-lg font-medium text-primary">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
