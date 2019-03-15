import React from "react";

const SwipeButton = props => {
  const { buttonText ...rest} = props;
  return <button {...rest}>{buttonText}</button>;
};

export default SwipeButton;
