import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import Header from "../Header";
import UserItem from "../UserItem";

export default function UsersList({ users, usersCase, isLoading }) {
  return (
    <div>
      <Header>{usersCase ? usersCase.description : "All users"}</Header>
      {isLoading && (
        <div className="center">
          <LoadingSpinner overlay />
        </div>
      )}
      {!isLoading &&
        users &&
        users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
}
