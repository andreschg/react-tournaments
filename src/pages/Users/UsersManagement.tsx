import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

import UsersTable from './UsersTable';
import { User } from './User';
import AddUserDialog from './AddUserDialog/AddUserDialog';
import useUsers from '../../hooks/useUsers';

const UsersManagement: React.FC = () => {
  const [users, addUser] = useUsers();
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
    await addUser(user);
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