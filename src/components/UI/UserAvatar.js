import React from "react";
import { Avatar } from "@material-ui/core";
import useStyles from "./UserAvatarStyle";

const CustomAvatar = (props) => {
  const classes = useStyles();
  const { name } = props;
  const avatarIcon = (value) => value.split(" ").shift().charAt(0);
  return (
    <Avatar aria-label="recipe" className={classes.avatar}>
      {avatarIcon(name)}
    </Avatar>
  );
};

export default CustomAvatar;
