import React from "react";
import UserCard from "../UI/UserCard";
import UserButton from "../UI/UserButton";
import UserAvatar from "../UI/UserAvatar";
import UserFullName from "../UI/UserFullName";
import UserName from "../UI/UserName";
import UserWebsiteLink from "../UI/UserWebsiteLink";

const User = (props) => {
  const { user } = props;
  return (
    <UserCard>
      <UserAvatar name={user.name} />
      <UserFullName name={user.name} />
      <UserName username={user.username} />
      <UserWebsiteLink link={user.website} />
      <UserButton btnText="More Details" userId={user.id} />
    </UserCard>
  );
};
export default User;
