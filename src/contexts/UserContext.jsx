import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider( { children }) { // the children prop represents each component we provide context to
  const [user, setUser] = useState(null);

  const value = { user, setUser }; // shorthand prop syntax

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext }; // common export convention
