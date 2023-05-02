import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { League } from '../../entities/League';

interface LeaguesTableProps {
  leagues: League[]
}

const LeaguesTable: React.FC<LeaguesTableProps> = ({ leagues }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell>Logo</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leagues.map(league => <LeagueRow league={league} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const LeagueRow: React.FC<{ league: League }> = ({ league }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell />
        <TableCell><img src={league.logo} style={{ maxWidth: 50 }} /></TableCell>
        <TableCell>{league.name}</TableCell>
      </TableRow>
      <TableRow>

      </TableRow>
    </>
  );
}

export default LeaguesTable;
