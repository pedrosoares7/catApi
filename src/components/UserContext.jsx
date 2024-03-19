import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleSubmitName = (userName) => {
    setUser(userName);
  };
  return (
    <UserContext.Provider value={{ user, handleSubmitName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
