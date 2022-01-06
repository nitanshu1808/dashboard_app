import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TeamMemberTable = (props) => {
  return (
    <div>
        <h3>Team</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell align="right">Membership Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.contacts.map((contact) => (
                <TableRow
                key={contact.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {contact.full_name}
                </TableCell>
                <TableCell>{contact.email_address}</TableCell>
                <TableCell align="right">{contact.membership_type}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default TeamMemberTable;