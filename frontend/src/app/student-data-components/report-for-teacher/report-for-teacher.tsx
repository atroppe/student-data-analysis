import styles from "./report-for-teacher.module.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

enum StudentRank {
  aboveAverage = "Above Average",
  belowAverage = "Below Average",
  average = "Within Average Range",
}

function createData(
  category: string,
  score: number,
  studentRank: StudentRank,
  strength: boolean, // show green
  challenge: boolean // show red
) {
  return { category, score, studentRank, strength, challenge };
}

const rows = [
  createData("Basic Arithmetic", 71, StudentRank.average, false, false),
  createData("Geometry Understanding", 63, StudentRank.average, false, false),
  createData("Word Problems", 68, StudentRank.average, false, false),
  createData("Advanced Math Concepts", 69, StudentRank.average, false, false),
  createData("Vocabulary Knowledge", 85, StudentRank.aboveAverage, true, false),
];

/* eslint-disable-next-line */
export interface ReportForTeacherProps {}

export default function ReportForTeacher() {
  const { studentId } = useParams();
  return (
    <div>
      <h1>Student ID: {studentId}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>category</TableCell>
              <TableCell align="right">score</TableCell>
              <TableCell align="right">studentRank</TableCell>
              <TableCell align="right">strength</TableCell>
              <TableCell align="right">challenge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.category}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.studentRank}</TableCell>
                <TableCell align="right">{row.strength}</TableCell>
                <TableCell align="right">{row.challenge}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
