import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import { usabilityRoutes } from '../Assets'
import '../App.css';
import { RouteInfo, ContentTitle } from ".";

/**
 * 
 * @param {Entity} props 
 * @returns 
 * @author Orel Cohen
 */
function UsabilityRoutesGrid(props) {
    return (
        <Grid container item
            spacing={2}
            xs={6}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <ContentTitle icon={usabilityRoutes} title="שמישות מסלולים" />

            <Grid container item
                spacing={2}
                alignItems="stretch"
            >

                <RouteInfo />
                <RouteInfo />
                <RouteInfo />

            </Grid>
        </Grid>
    );
}

export default UsabilityRoutesGrid;
