import * as React from 'react';
import '../App.css';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';




function LoweringDevicePaper(props) {
    return (
        
        // style={{justifyContent: 'space-around', alignItems: 'center'}}
        <Paper 
        elevation={3}
        style={{height: 130, width: 90}}>
            {props.icon}
            <Typography>{props.title}</Typography>
        </Paper>
    );
}

export default LoweringDevicePaper;
