import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { LoweringDevicePaper } from '.';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { loweringDevices } from "../Assets";



function LoweringDevicesGrid(props) {
    return (
        <Grid item container
            xs={3}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <Grid container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">
                <img src={loweringDevices} alt="loweringDevices" />
                <Typography fontSize={30} fontFamily='Heebo'>מכשירי הנמכה</Typography >
            </Grid>

            <Grid container
                direction="row-reverse"
                justifyContent="space-around"
                alignItems="center"
            >
                <LoweringDevicePaper
                    icon={<CheckCircleIcon color="success" />}
                    title="GCA" />
                <LoweringDevicePaper
                    icon={<CheckCircleIcon color="success" />}
                    title="VOR" />
                <LoweringDevicePaper
                    icon={<CancelIcon color="error" />}
                    title="ILS" />
                <LoweringDevicePaper
                    icon={<CancelIcon color="disabled" />}
                    title="TACAN" />
                <LoweringDevicePaper
                    icon={<CancelIcon color="error" />}
                    title="DME" />
            </Grid>

        </Grid>
        // style={{justifyContent: 'space-around', alignItems: 'center'}}
        // <Paper 
        // elevation={3}
        // style={{height: 147, width: 100}}>
        //     {props.icon}
        //     <Typography>{props.title}</Typography>
        // </Paper>
    );
}

export default LoweringDevicesGrid;
