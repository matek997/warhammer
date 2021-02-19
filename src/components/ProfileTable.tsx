import React, { useState } from "react";
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
import TextField from "@material-ui/core/TextField";

/** profiles are given as array,
 *  bc character sheet later will use it and
 *  will need rows for advancments, talents, etc
 */
export const ProfileTable = (props: {
  profiles: { profile: IProfile; editable?: boolean }[];
  addSumRow?: boolean;
  onChange?: (val: IProfile[]) => void;
}) => {
  const { profiles } = props;
  const [newProfiles, setNewProfiles] = useState(
    props.profiles.map((r) => r.profile)
  );
  if (profiles.length === 0) return <span>No profile info</span>;
  const heads = Object.keys(profiles[0].profile);
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((el, index) => (
              <TableCell key={`header-${index}`}>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map((row, index: number) => (
            <TableRow key={`profile-${index}`}>
              {heads.map((key, cellIndex: number) => (
                <TableCell key={`row-${index}cell${cellIndex}`}>
                  {row.editable ? (
                    <TextField
                      fullWidth
                      value={newProfiles[index][key]}
                      style={{
                        minWidth: "70px",
                      }}
                      inputProps={{ min: 0 }}
                      type="number"
                      size="small"
                      onChange={(ev) => {
                        const newVal = ev.target.value;
                        newProfiles[index][key] = (newVal as unknown) as number;
                        setNewProfiles(newProfiles.concat([]));
                        if (props.onChange) props.onChange(newProfiles);
                      }}
                      variant="outlined"
                    />
                  ) : (
                    row.profile[key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
