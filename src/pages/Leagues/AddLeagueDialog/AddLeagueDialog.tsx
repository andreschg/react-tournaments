import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { League } from '../../../entities/League';

interface AddLeagueProps {
  open: boolean;
  onClose: () => void;
  onSave: (league: League) => Promise<void>;
}

const AddLeague: React.FC<AddLeagueProps> = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const onLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(event.currentTarget.value);
  }

  const onSaveHandler = () => {
    onSave({ name, logo, teams: [] });
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add League</DialogTitle>
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
            id="logo"
            label="logo"
            type="text"
            fullWidth
            variant="standard"
            onChange={onLogoChange}
            value={logo}
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

export default AddLeague;