import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import { usabilityRoutes } from '../Assets'
import '../App.css';
import { RoutesInfo } from ".";

/**
 * 
 * @param {*} props 
 * @returns 
 */
function UsabilityRoutesGrid(props) {
    return (
        <Grid container item
            spacing={2}
            xs={6}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <Grid container item
                spacing={2}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <img src={usabilityRoutes} alt="usabilityRoutes" />
                <Typography fontSize={30} fontFamily='Heebo'>שמישות מסלולים</Typography >
            </Grid>




            <Grid container item
                spacing={2}
                alignItems="stretch"
            >

                <RoutesInfo />
                <RoutesInfo />
                <RoutesInfo />

            </Grid>
        </Grid>
    );
}

export default UsabilityRoutesGrid;
