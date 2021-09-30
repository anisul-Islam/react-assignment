import React from "react";
import { Typography } from "@material-ui/core";

const UserFullName = (props) => {
  const { name } = props;
  return (
    <Typography variant="h5" gutterBottom>
      {name}
    </Typography>
  );
};

export default UserFullName;
