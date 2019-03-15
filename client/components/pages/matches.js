import React from "react";
import ThumbDownButton from "../atoms/ThumbDownButton";
import ThumbUpButton from "../atoms/ThumbUpButton";
import ProfileImage from "../atoms/ProfileImage";

const Matches = () => {
  return (
    <>
      <h1>Matches Page</h1>
      <ThumbDownButton />
      <ThumbUpButton />
      <ProfileImage />
    </>
  );
};

export default Matches;
