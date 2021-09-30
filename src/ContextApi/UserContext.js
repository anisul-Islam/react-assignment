import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};
