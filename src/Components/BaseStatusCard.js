import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import '../App.css';
import { baseIcon, editIcon, loweringDevices, usabilityRoutes, weatherInfo, fieldStatus, devicesCloudIcon } from '../Assets'
import { PartialWeatherStatus } from ".";


function BaseStatusCard(props) {
    console.log(props);
    return (
        <Grid item>
            <Paper >
                <Grid container item
                spacing={2}
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center">
                    <Grid item>
                        <img src={baseIcon} />

                    </Grid>
                    <Grid item>
                        <Typography fontFamily='Heebo'>{props.entity.inChargeComplex.complexName}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontFamily='Heebo'>{props.entity.lastUpdateTime}</Typography>
                    </Grid>
                    <Grid item>
                        <PartialWeatherStatus entity={props.entity} isFooter={true} />
                    </Grid>

                </Grid>

            </Paper>
        </Grid>

    );
}

export default BaseStatusCard;
