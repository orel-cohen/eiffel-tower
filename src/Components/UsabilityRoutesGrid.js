import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import { usabilityRoutes } from '../Assets' 
import '../App.css';


function UsabilityRoutesGrid(props) {
    return (
        <Grid item container
            xs={7}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <Grid container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">
                <img src={usabilityRoutes} alt="usabilityRoutes" />
                <Typography fontSize={30} fontFamily='Heebo'>שמישות מסלולים</Typography >
            </Grid>




            <Grid container
                direction="column"
                justifyContent="space-around"
                alignItems="stretch"
                style={{ direction: 'rtl', padding: 10 }}>
                <Paper fontFamily='Heebo'
                    style={{
                        width: 1005,
                        height: 43
                    }}>
                    03L/21R
                    </Paper>
                <Paper fontFamily='Heebo'
                    style={{
                        width: 1005,
                        height: 43
                    }}>
                    03R/21L
                    </Paper >
                <Paper fontFamily='Heebo'
                    style={{
                        width: 1005,
                        height: 43
                    }}>
                    03Z/21Z
                    </Paper>
            </Grid>
        </Grid>
    );
}

export default UsabilityRoutesGrid;
