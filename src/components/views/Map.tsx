import { Container, InputLabel, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import { Options } from "vis-network/dist/types/network/Network";
import { ProfessionProvider } from "../../data/Provider";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Network } from "../graph/Network";
import Select from '@material-ui/core/Select';
import { IProfession } from "../../models/IProfession";
import { useState } from "react";
import { NetworkBuilder } from "../../models/NetworkBuilder";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export const Map = () => {
	// const proflist = ;
	const iprofs = ProfessionProvider.getAll();
	const boxOpts = iprofs.map(el => el.label);
	const [focus, setFocus] = useState(iprofs[0]);
	const classes = useStyles();

	const proflist: any = []
	const opts: Options = {
		autoResize: true,
		nodes: {},
		layout:{
			    hierarchical: {
      enabled:false,
      levelSeparation: 150,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'hubsize',  // hubsize, directed
      shakeTowards: 'leaves'  // roots, leaves
    }
		},
		physics:false,
		edges: {
			arrows: {
				to: true,
			},
		},
	};

	const handleChange = (event: React.ChangeEvent<{
		name?: string | undefined;
		value: unknown;
	}>, child: React.ReactNode) => {

		setFocus(ProfessionProvider.getProfessionById(parseInt(event.target.value as string)));
	};
	return (
		<Container>

			<Typography variant="h3" gutterBottom>
				Class map
      </Typography>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<InputLabel>Class</InputLabel>
							<Select
								//labelId="demo-simple-select-label"
								//	id="demo-simple-select"
								value={focus.id}
								onChange={handleChange}
							>
								{iprofs.map(el => <MenuItem value={el.id}>{el.label}</MenuItem>)}

							</Select>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>xs=12 sm=6</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Network
								container={{ style: { height: "80vh", width: "100%" } }}
								network={opts}
								data={(new NetworkBuilder(focus)).buildNetwork('FORWARD',2)}
							/>
						</Paper>
					</Grid>

				</Grid>
			</div>

		</Container>
	);
};
