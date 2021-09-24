import { Paper } from '@material-ui/core';
import { Typography } from '@mui/material';
import * as React from 'react';
import '../App.css';
import { baseIcon, editIcon, loweringDevices, usabilityRoutes, weatherInfo, fieldStatus, devicesCloudIcon } from '../Assets'


function BaseStatusCard(props) {
    return (
        <Paper className="BaseStatusCard">
            <img src={baseIcon}/>
            <Typography fontFamily='Heebo'>שם בסיס</Typography>
        </Paper>
    );
}

export default BaseStatusCard;
