import React from 'react';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase/firebase';

const Users: React.FC = () => {
  const usersRef = collection(firestore, 'users');
  const [users] = useCollectionData(usersRef);

  return (
    <>
      <h2>Users</h2>
      <div>
        {users?.map(user => (
          <span>{ user.name }</span>
        ))}
      </div>
    </>
  );
}

export default Users;