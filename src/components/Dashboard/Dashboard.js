import React from "react";
import "../../App.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Dashboard() {
  const handleEvent = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Table className="table">
        <Thead>
          <Tr>
            <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Name</Th>
            <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Role</Th>
            <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Category</Th>
            <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Update</Th>
            <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className="table-td-th">ABC</Td>
            <Td className="table-td-th">Manager</Td>
            <Td className="table-td-th">Development</Td>
            <Td className="table-td-th"><UpdateIcon /></Td>
            <Td className="table-td-th"><DeleteForeverIcon /></Td>
          </Tr>
        </Tbody>
      </Table>
      <button onClick={handleEvent}>Log Out</button>
    </div>
  );
}

export default Dashboard;
