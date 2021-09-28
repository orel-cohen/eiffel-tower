import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Paper from '@mui/material/Paper';
import '../App.css';

/**
 * Represent device, responsible to display device status 
 * @param {Specific data on device} props 
 * @returns 
 * @author Orel Cohen
 */
function LoweringDevice(props) {
    const NONE = "אין"
    const USABLE = "שמיש"
    const NOT_USABLE = "לא שמיש"
    const LIMITED = "מוגבל"

    function iconDetector(hebrewValue) {
        switch (hebrewValue) {
            case NONE:
                return <CancelIcon fontSize='large' color="disabled" />
            case USABLE:
                return <CheckCircleIcon fontSize='large' color="success" />
            case NOT_USABLE:
                return <CancelIcon fontSize='large' color="error" />
            case LIMITED:
                return <CancelIcon fontSize='large' color="disabled" />
            default:
        }
    }

    return (
        <Grid item xs={2}>
            <Paper elevation={3}>
                <Grid container item
                rowSpacing={2}
                direction='column'
                alignItems='center'>
                    <Grid item>
                        {iconDetector(props.usability)}
                    </Grid>
                    <Grid item>
                        <Typography fontFamily='Heebo' fontSize='1.5rem'>{props.title}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    );
}

export default LoweringDevice;
