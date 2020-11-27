import React from "react";
import { IProfile } from "../models/IProfile";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

/** profiles are given as array,
 *  bc character sheet later will use it and
 *  will need rows for advancments, talents, etc
 */
export const ProfileTable = (props: {
  profiles: IProfile[];
  addSumRow?: boolean;
}) => {
  const { profiles } = props;
  if (profiles.length === 0) return <span>No profile info</span>;
  const heads = Object.keys(profiles[0]);
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((el) => (
              <TableCell>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map((row, index) => (
            <TableRow key={"profile" + index}>
              {heads.map((key, cellIndex) => (
                <TableCell key={`row-${index}cell${cellIndex}`}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
