import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { LoweringDevice } from '.';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { loweringDevices } from "../Assets";


/**
 * Represent status of lowering devices in entity
 * @param {Entity} props 
 * @returns 
 */
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
                alignItems="stretch"
            >
                <LoweringDevice
                    icon={<CheckCircleIcon color="success" />}
                    title="GCA" />
                <LoweringDevice
                    icon={<CheckCircleIcon color="success" />}
                    title="VOR" />
                <LoweringDevice
                    icon={<CancelIcon color="error" />}
                    title="ILS" />
                <LoweringDevice
                    icon={<CancelIcon color="disabled" />}
                    title="TACAN" />
                <LoweringDevice
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
