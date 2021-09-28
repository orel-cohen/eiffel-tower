import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import '../App.css';

/**
 * Functional component that represent specific route info,
 * and display indication about it
 * @param {*} props Route info from entity
 * @returns 
 * @todo Parse entity from props to useState member and set info in comp
 * @author Orel Cohen
 */
function RouteInfo(props) {
    return (
        <Grid container item xs={12}
            direction="row-reverse"
            alignItems='stretch'
            >
            <Grid item xs={12}>
                <Paper fontFamily='Heebo'>

                    {/* TODO - grid container */}
                    <CheckCircleIcon color="success" />
                    03L/21R

                </Paper>
            </Grid>
        </Grid>
    );
}

export default RouteInfo;
