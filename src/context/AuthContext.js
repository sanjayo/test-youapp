// // context/AuthContext.js
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
