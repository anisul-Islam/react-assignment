import React from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./UserCardStyle";
const UserCard = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
};
export default UserCard;
