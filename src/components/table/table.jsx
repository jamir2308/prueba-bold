import { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./table.scss";
import { dataTable } from "../../utils/data";
import visa from "../../assets/images/visa-4.svg";
import master from "../../assets/images/mc_symbol.svg";

const headCells = [
  {
    id: "TransactionStatus",
    numeric: false,
    disablePadding: true,
    label: "Transacción",
  },
  {
    id: "transactionDate",
    numeric: true,
    disablePadding: false,
    label: "Fecha y hora",
  },
  {
    id: "paymentMethod",
    numeric: true,
    disablePadding: false,
    label: "Método de pago",
  },
  {
    id: "IdTransaction",
    numeric: true,
    disablePadding: false,
    label: "ID transacción Bold",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "amount",
  },
];

export default function EnhancedTable() {
  const [selected, setSelected] = useState([]);
  const [rows] = useState(dataTable);

  const handleClick = (_, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box className="table">
      <Paper className="table">
        <Toolbar className="table-container-title">
          <Typography variant="h6" id="tableTitle" component="div">
            Tus ventas en septiembre
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750, borderRadius: 15,fontSize: 30, [`& .${tableCellClasses.root}`]: {
                borderBottom: "2px solid #e5e7ef",
              }}}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead className="table-head">
              <TableRow>
                <TableCell></TableCell>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align="left"
                    padding={headCell.disablePadding ? "none" : "normal"}
                    className="table-head"
                    color="#111e6c"
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{overflowY: "scroll"}} className="table-body">
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                  >
                    <TableCell className={row.successfulPayment ? "table-border-blue" : "table-border-grey"}></TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      className="table-text-blue"
                    >
                      {row.TransactionStatus}
                    </TableCell>
                    <TableCell className="table-text-grey" align="left">{row.transactionDate}</TableCell>
                    <TableCell className="table-text-grey" align="left"><img className='table-logo' src={row.logoCard === "visa"? visa : master} />{row.paymentMethod}</TableCell>
                    <TableCell className="table-text-grey" align="left">{row.IdTransaction}</TableCell>
                    <TableCell className="table-text-blue table-row-column" align="left">
                        <label>$ {row.amount}</label>
                        {row.successfulPayment && <div className="table-text-grey">{row.deduction}</div>}
                        {row.successfulPayment && <div className="table-text-red">{row.deductionAmount}</div>}
                        </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
