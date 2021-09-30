import React, { useContext } from "react";
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";
import { UserContext } from "../../ContextApi/UserContext";
import useStyles from "./DetailsPageStyle";

const DetailsPage = () => {
  const classes = useStyles();
  const { users, error, loading } = useContext(UserContext);
  let { userId } = useParams();
  userId = Number(userId);
  const loadingMessage = <p> loading... </p>;
  const errorMessage = <p>{error.message}</p>;

  return (
    <div className={classes.root}>
      {loading ? (
        loadingMessage
      ) : (
        <div>
          {error && errorMessage}
          {users
            .filter((user) => user.id === userId)
            .map((user) => (
              <DetailsCard key={user.id} user={user} />
            ))}
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
