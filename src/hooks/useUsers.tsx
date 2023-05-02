import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { User } from "../pages/Users/User";
import { firestore } from "../firebase/firebase";

type UserContextState = [
  User[],
  // AddUser
  (user: User) => Promise<User>,
];
const defaultValue: UserContextState = [
  [],
  (user: User ) => Promise.resolve(user),
];
const UserContext = React.createContext<UserContextState>(defaultValue);

export default function useUsers() {
  return useContext(UserContext);
}

export const UserProvider: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const usersRef: any = collection(firestore, 'users');
  const [usersData] = useCollectionData<User>(usersRef);

  useEffect(() => {
    setUsers(usersData ? usersData : []);
  }, [usersData]);

  const addUser = async (user: User): Promise<User> => {
    await addDoc(usersRef, user);
    return user;
  }

  return (
    <UserContext.Provider value={[users, addUser]}>
      { children }
    </UserContext.Provider>
  );
}