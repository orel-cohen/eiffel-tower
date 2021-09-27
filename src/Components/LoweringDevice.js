import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Paper from '@mui/material/Paper';



/**
 * Represent device, response to display device status 
 * @param {Specific data on device} props 
 * @returns 
 */
function LoweringDevice(props) {
    const NONE = "אין"
    const USABLE = "שמיש"
    const NOT_USABLE = "לא שמיש"
    const LIMITED = "מוגבל"

    function iconDetector(hebrewValue) {
        switch (hebrewValue) {
            case NONE:
                return <CancelIcon color="disabled" />
            case USABLE:
                return <CheckCircleIcon color="success" />
            case NOT_USABLE:
                return <CancelIcon color="error" />
            case LIMITED:
                return <CancelIcon color="disabled" />
            default:
        }
    }

    return (

        // style={{justifyContent: 'space-around', alignItems: 'center'}}
        <Grid item>
            <Paper
                elevation={3}
            // style={{height: 130, width: 90}}
            >
                {iconDetector(props.usability)}
                <Typography>{props.title}</Typography>
            </Paper>
        </Grid>

    );
}

export default LoweringDevice;
