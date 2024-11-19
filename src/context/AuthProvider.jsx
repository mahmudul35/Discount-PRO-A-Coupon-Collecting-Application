import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../utils/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    name: "John Doe",
    signUp,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
