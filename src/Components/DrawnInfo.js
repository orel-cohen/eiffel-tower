import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import '../App.css';

/**
 * Represent icon and data info as a pair
 * @param {direction, icon, info} props 
 * @returns 
 * @author Orel Cohen
 */
function DrawnInfo(props) {
    return (
        <Grid container item
            spacing={2}
            direction={props.direction ? props.direction : "column"}
            alignItems="center">

            <Grid item>
                <img src={props.icon} alt={props.icon} />
            </Grid>
            <Grid item>
                <Typography
                    align='center'
                    fontFamily='Heebo'
                    style={props.infoStyle}>
                    {props.info ? props.info : "ללא נתונים"}
                </Typography>
            </Grid>

        </Grid>
    );
}

export default DrawnInfo;