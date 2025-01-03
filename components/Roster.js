"use client";
import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  { id: "name", label: "Name" },
  { id: "grad_year", label: "Grad Year" },
  { id: "position", label: "Position" },
  { id: "profile", label: "Profile" },
];

export default function Roster() {
  const [players, setPlayers] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/players");
      const data = await res.json();
      setPlayers(data);
    }
    fetchData();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const sortedPlayers = React.useMemo(() => {
    return [...players].sort((a, b) => {
      if (orderBy === "name") {
        const aName = `${a.name.first_name} ${a.name.last_name}`;
        const bName = `${b.name.first_name} ${b.name.last_name}`;
        return (order === "asc" ? 1 : -1) * aName.localeCompare(bName);
      }

      const aValue = a[orderBy];
      const bValue = b[orderBy];
      return (
        (order === "asc" ? 1 : -1) *
        (typeof aValue === "string"
          ? aValue.localeCompare(bValue)
          : aValue - bValue)
      );
    });
  }, [players, order, orderBy]);

  return (
    <Box className="roster-container">
      <Paper className="roster-paper">
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>
                    {headCell.id !== "profile" ? (
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : "asc"}
                        onClick={() => handleRequestSort(headCell.id)}
                      >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    ) : (
                      headCell.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedPlayers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((player) => (
                  <TableRow hover key={player.id}>
                    <TableCell>{`${player.name.first_name} ${player.name.last_name}`}</TableCell>
                    <TableCell>{player.grad_year}</TableCell>
                    <TableCell>{player.position.join(" | ")}</TableCell>
                    <TableCell>
                      <Link href={`/roster/player/${player.id}`}>
                        View Profile
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={players.length}
          rowsPerPage={25}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[25]}
        />
      </Paper>
    </Box>
  );
}
