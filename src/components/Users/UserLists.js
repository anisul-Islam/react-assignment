import React from "react";
import User from "./User";
const UserLists = (props) => {
  return props.users.map((user) => <User key={user.id} user={user} />);
};
export default UserLists;
