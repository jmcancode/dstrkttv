import React from "react";

export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     return () => {
//       app.auth().onAuthStateChanged(setUser);
//       return <AuthContext.Provider value={{ user }}></AuthContext.Provider>;
//     };
//   }, []);
// };
