import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./UserButtonStyle";

const CustomButton = (props) => {
  const classes = useStyles();
  const { btnText, userId } = props;

  return (
    <Button
      href={`/${userId}`}
      variant="contained"
      color="primary"
      className={classes.btn}
    >
      {btnText}
    </Button>
  );
};
export default CustomButton;
