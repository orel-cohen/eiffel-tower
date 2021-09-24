import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';




function LoweringDevice(props) {
    return (

        // style={{justifyContent: 'space-around', alignItems: 'center'}}
        <Grid item>
            <Paper
                elevation={3}
            // style={{height: 130, width: 90}}
            >
                {props.icon}
                <Typography>{props.title}</Typography>
            </Paper>
        </Grid>

    );
}

export default LoweringDevice;
