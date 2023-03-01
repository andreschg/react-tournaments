import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { Button, Grid } from '@mui/material';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase/firebase';
import UsersTable from './UsersTable';
import { User } from './User';
import AddUserDialog from './AddUserDialog/AddUserDialog';

const UsersManagement: React.FC = () => {
  const usersRef: any = collection(firestore, 'users');
  const [users] = useCollectionData<User>(usersRef);
  // const [users] = useCollectionData(collection(firestore, 'users'));
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);

  console.log(users);

  const onNewUserHandler = () => {
    setOpenAddUserDialog(true);
  }

  const onAddUserDialogClose = () => {
    setOpenAddUserDialog(false);
  }

  const onUserSave = async (user: User) => {
    console.log("Saving");
    await addDoc(usersRef, user);
    setOpenAddUserDialog(false);
  }

  return (
    <Grid container justifyContent="flex-start" alignItems="flex-start" direction="column" spacing={{ xs: 1, sm: 2 }}>
      <h2>Users</h2>
      <UsersTable users={users || []} />
      <Grid item xs={2}>
        <Button color="primary" variant="contained" onClick={onNewUserHandler}>+ New User</Button>
      </Grid>
      <AddUserDialog
        open={openAddUserDialog}
        onClose={onAddUserDialogClose}
        onSave={onUserSave}
      />
    </Grid>
  );
}

export default UsersManagement;