import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from '@material-ui/core';
import '../App.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

/**
 * Functional component that represent specific route info,
 * and display indication about it
 * @param {*} props Route info from entity
 * @returns 
 * @todo Parse entity from props to useState member and set info in comp
 */
function RouteInfo(props) {
    return (
        <Grid container item
            direction="row-reverse"
            // justifyContent="flex-start"
            // alignItems="stretch"
            >
            {/* <Grid item> */}
                <Paper fontFamily='Heebo' style={{textAlign: 'center'}}>
                    <CheckCircleIcon color="success" />
                    03L/21R
                </Paper>
            {/* </Grid> */}
        </Grid>
    );
}

export default RouteInfo;
