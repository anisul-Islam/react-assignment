import React from "react";
import Typography from "@material-ui/core/Typography";
const DetailsText = ({ text }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {text}
    </Typography>
  );
};
export default DetailsText;
