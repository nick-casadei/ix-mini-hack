import React from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Fab from "@material-ui/core/Fab";

const SwipeButton = () => {
  return (
    <>
      <Fab color="secondary" aria-label="Edit">
        <ThumbDownIcon />
      </Fab>
    </>
  );
};

export default SwipeButton;
