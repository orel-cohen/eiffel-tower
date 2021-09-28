import * as React from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { fieldStatus, devicesCloudIcon } from '../Assets';
import { ContentTitle } from ".";

/**
 * 
 * @param {Entity} props 
 * @returns 
 * @author Orel Cohen
 */
function FieldStatusGrid(props) {
    return (
        <Grid item container
            xs={3}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">

            <ContentTitle icon={fieldStatus} title="מצב שדה" />

            <Grid container item
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="stretch"
                >

                <Grid container item xs={6}
                    direction='column'
                    style={{ direction: 'rtl' }}>
                    <Grid item>
                        <Typography fontSize={30} fontFamily='Heebo' fontSize='2.2rem' >מכשירים</Typography>
                    </Grid>
                    <Grid item>
                        <img src={devicesCloudIcon} alt="devicesCloudIcon" />
                    </Grid>
                    <Grid item>
                        <Typography fontFamily='Heebo'>שדמ: כנף 25</Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontFamily='Heebo'>התראה</Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={6}
                    rowSpacing={1}
                    direction='column'
                    alignItems='baseline'
                    style={{ direction: 'rtl' }}>
                    <Grid item>
                        <Typography fontSize={30} fontFamily='Heebo' fontSize='2.2rem'>שדה צהוב</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ background: '#FFC402', borderRadius: 4, opacity: 1, fontFamily: 'Heebo', color: 'white', padding: 3 }}>אין תאורה חשמלית</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ background: '#FFC402', borderRadius: 4, opacity: 1, fontFamily: 'Heebo', color: 'white', padding: 3 }}>מסלולים פגועים</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FieldStatusGrid;
