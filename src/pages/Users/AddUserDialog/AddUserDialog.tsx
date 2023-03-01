import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { User } from '../User';

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: User) => Promise<void>;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  }

  const onSaveHandler = () => {
    onSave({ name, username });
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={onNameChange}
            value={name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={onUsernameChange}
            value={username}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSaveHandler}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUserDialog;