import type { FC } from "react";

import { FormData } from "../../../types/types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const tableHeadNames = [
  "Table Name",
  "Schema",
  "Audiences",
  "Last Modified",
  "Actions",
];

interface DataTableProps {
  rows: FormData[];
}

const DataTable: FC<DataTableProps> = ({ rows }) => {
  if (rows.length === 0)
    return (
      <Box py={5}>
        <Typography variant="h5" component="h2">
          No Data...
        </Typography>
      </Box>
    );

  return (
    <TableContainer component={"div"}>
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "collapse",
          "& .MuiTableCell-root": {
            border: "1px solid rgba(224, 224, 224, 1)",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {tableHeadNames.map((tableRow, index) => (
              <TableCell key={index} align="center">
                {tableRow}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center" component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell align="center">{row.schema}</TableCell>
              <TableCell align="center">{row.audience}</TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar sx={{ width: 36, height: 36 }}>A</Avatar>
                <Box>
                  <Typography variant="body2">2024/10/15</Typography>
                  <Typography variant="body2">17:40</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Button variant="outlined">View Columns</Button>
                  <DeleteIcon sx={{ color: "grey", cursor: "pointer" }} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
