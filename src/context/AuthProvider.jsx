import { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "John Doe",
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
