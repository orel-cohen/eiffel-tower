import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { fieldStatus, devicesCloudIcon } from '../Assets';


function FieldStatusGrid(props) {
    return (
        <Grid item container
            xs={3}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <Grid container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">
                <img src={fieldStatus} alt="fieldStatus" />
                <Typography fontSize={30} fontFamily='Heebo'>מצב שדה</Typography >
            </Grid>

            <Grid container
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="flex-start">

                <Grid item
                    style={{ direction: 'rtl' }}>
                    <Typography fontSize={30} fontFamily='Heebo'>מכשירים</Typography>
                    <img src={devicesCloudIcon} alt="devicesCloudIcon" />
                    <Typography fontFamily='Heebo'>שדמ: כנף 25</Typography>
                    <Typography fontFamily='Heebo'>התראה</Typography>
                </Grid>

                <Grid item
                    style={{ direction: 'rtl' }}>
                    <Typography fontSize={30} fontFamily='Heebo'>שדה צהוב</Typography>
                    <Typography style={{ background: '#FFC402', borderRadius: 4, opacity: 1, fontFamily: 'Heebo' }}>אין תאורה חשמלית</Typography>
                    <Typography style={{ background: '#FFC402', borderRadius: 4, opacity: 1, fontFamily: 'Heebo' }}>מסלולים פגועים</Typography>
                </Grid>


            </Grid>
        </Grid>
    );
}

export default FieldStatusGrid;
