import React, { useContext } from "react";
import { UserContext } from "../../ContextApi/UserContext";
import UserLists from "../Users/UserLists";
import useStyles from "./HomePageStyle";
const HomePage = () => {
  const classes = useStyles();
  const { users, error, loading } = useContext(UserContext);
  const loadingMessage = <p> loading... </p>;
  const errorMessage = <p>{error.message}</p>;

  return (
    <div>
      {loading ? (
        loadingMessage
      ) : (
        <div className={classes.cardContainer}>
          {error && errorMessage}
          <UserLists users={users} />
        </div>
      )}
    </div>
  );
};
export default HomePage;
