import axios from 'axios';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as { user: any; setUser: React.Dispatch<any> });

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState(null);

  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
