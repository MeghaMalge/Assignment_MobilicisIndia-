import React, { useEffect, useState } from "react";

import "./Users.css";
import Header from "../Header";
import { useHttpClient } from "../../hooks/http-hook";
import UsersList from "../UsersList";
import ErrorModal from "../ErrorModal";
import { usersFilters } from "../../constants";

export default function Users() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [users, setUsers] = useState();
  const [usersCase, setUsersCase] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await sendRequest(
        usersCase
          ? `http://localhost:5000/api/users/${usersCase.name}`
          : "http://localhost:5000/api/users"
      );

      if (!error) {
        setUsers(data);
      }
    };

    fetchUsers();
  }, [error, sendRequest, usersCase]);

  return (
    <div>
      <ErrorModal error={error} onClear={clearError} />
      <Header>Our Users</Header>
      <div>
        <span>Filter users</span>
        {usersFilters.map((filter) => {
          return (
            <button
              className="btn-text"
              onClick={() => {
                setUsersCase(filter);
              }}
            >
              {filter.description}
            </button>
          );
        })}
      </div>
      <UsersList users={users} usersCase={usersCase} isLoading={isLoading} />
    </div>
  );
}
