import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./UserNameStyle";

const UserName = (props) => {
  const classes = useStyles();
  const { username } = props;
  return (
    <Typography
      className={classes.caption}
      variant="caption"
      display="block"
      gutterBottom
    >
      {username}
    </Typography>
  );
};

export default UserName;
