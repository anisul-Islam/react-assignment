import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import useStyles from "./UserWebsiteLinkStyle";
const UserWebsiteLink = (props) => {
  const classes = useStyles();
  const { link } = props;
  const formattedLink = `http://${link}`;

  return (
    <div>
      <Typography gutterBottom>
        <Link
          className={classes.link}
          href={formattedLink}
          underline="always"
          display="block"
        >
          {formattedLink}
        </Link>
      </Typography>
    </div>
  );
};

export default UserWebsiteLink;
