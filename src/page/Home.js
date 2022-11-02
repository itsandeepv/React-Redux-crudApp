import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, loadUsers } from '../redux/action';



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));















function Home() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users)
  const navigate = useNavigate()
  // console.log(data[0] + "data ");

  console.log(users);

  useEffect(() => {
    dispatch(loadUsers())
    console.log("action dispatch hogya");





  }, [])


  const deleteHandle = (id) => {
    if (window.confirm("Are You Sure to Delete the User Then Press Confirm")) {

      dispatch(deleteUsers(id))

      dispatch(loadUsers())

    }
  }
  const editHandle = () => {

  }

  const adduser = () => {
    navigate("/adduser")
  }


  return (

    <div >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => adduser()} style={{ backgroundColor: "blue", margin: "15px", color: "white" }}>
          AddUser</Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              users.map((user, index) =>


                <StyledTableRow key={user.id}>

                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.contact}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center" className="btns">

                    <Button variant="contained" color="success" onClick={() => navigate(`edituser/${user.id}`)}>
                      Edit</Button>
                    <Button variant="contained" color="error" onClick={() => deleteHandle(user.id)} style={{ backgroundColor: "red", margin: "5px", color: "white" }}>
                      Delete</Button>

                  </StyledTableCell>


                </StyledTableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>



    </div>
  )
}

export default Home
