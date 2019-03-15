import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Fab from "@material-ui/core/Fab";

const SwipeButton = () => {
  return (
    <>
      <Fab color="primary" aria-label="Edit">
        <ThumbUpIcon />
      </Fab>
    </>
  );
};

export default SwipeButton;
