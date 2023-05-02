import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

import useSquads from '../../hooks/useSquads';
import AddLeagueDialog from './AddLeagueDialog/AddLeagueDialog';
import LeaguesTable from './LeaguesTable';
import { League } from '../../entities/League';

const LeaguesManagement: React.FC = () => {
  const [leagues, addLeague] = useSquads();
  const [openAddLeagueDialog, setOpenAddLeagueDialog] = useState(false);

  // console.log(users);

  const onNewLeagueHandler = () => {
    setOpenAddLeagueDialog(true);
  }

  const onAddLeagueDialogClose = () => {
    setOpenAddLeagueDialog(false);
  }

  const onLeagueSave = async (league: League) => {
    console.log("Saving");
    await addLeague(league);
    setOpenAddLeagueDialog(false);
  }

  return (
    <Grid container justifyContent="flex-start" alignItems="flex-start" direction="column" spacing={{ xs: 1, sm: 2 }}>
      <h2>Leagues</h2>
      <Grid item xs={2}>
        <Button color="primary" variant="contained" onClick={onNewLeagueHandler}>+ New League</Button>
      </Grid>
      <LeaguesTable leagues={leagues} />
      <AddLeagueDialog open={openAddLeagueDialog} onClose={onAddLeagueDialogClose} onSave={onLeagueSave} />
    </Grid>
  );
} 

export default LeaguesManagement;