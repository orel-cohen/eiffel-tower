import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import "../App.css";
import { styled } from '@mui/material/styles';
import { baseIcon, editIcon, loweringDevices, usabilityRoutes, weatherInfo, fieldStatus } from '../Assets'
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: 150,
    height: 100,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content() {
    return (
        <Grid item container
            direction="row-reverse"
            justifyContent="space-evenly"
            alignItems="center">

            <Grid item container
                xs={12}
                direction="row-reverse" // ltr/up to down is default
                justifyContent="flex-start" // where to locate the group
                alignItems="center">

                <img src={baseIcon} alt="BaseIcon" />
                <Typography fontSize={30} fontFamily='ariel'>בח"א 10</Typography >
                <img src={editIcon} alt="EditIcon" />

            </Grid>

            <Grid item container
                xs={4}
                direction="row-reverse"
                justifyContent="space-around"
                alignItems="center">

                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={fieldStatus} alt="fieldStatus" />
                    <Typography fontSize={30} fontFamily='ariel'>מצב שדה</Typography >
                </Grid>

                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center">

                    <Grid item
                        direction="column"
                        alignItems="center">
                        <Typography>מכשירים</Typography>
                        <Typography>שדמ</Typography>
                        <Typography>כנף 25</Typography>
                    </Grid>

                    <Grid item
                        direction="column"
                        alignItems="center">
                        <Typography>שדה צהוב</Typography>
                        <Typography>אין תאורה חשמלית</Typography>
                        <Typography>מסלולים פגועים</Typography>
                    </Grid>


                </Grid>
            </Grid>

            <Divider />

            <Grid item container
                xs={8}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={weatherInfo} alt="weatherInfo" />
                    <Typography fontSize={30} fontFamily='ariel'>נתונים מטראולוגים</Typography >
                </Grid>

                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center">
                    <Item>מזג אוויר</Item>
                    <Item>עננות</Item>
                    <Item>כיוון הרוח</Item>
                    <Item>ראות</Item>
                    <Divider />
                    <Item>מעלות</Item>
                    <Item>לחות</Item>
                    <Divider />
                    <Item>משו לא ברור</Item>

                </Grid>

            </Grid>

            <Divider />

            <Grid item container
                xs={4}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={loweringDevices} alt="loweringDevices" />
                    <Typography fontSize={30} fontFamily='ariel'>מכשירי הנמכה</Typography >
                </Grid>

                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center">
                    <Paper className="Pepper">
                        GCA
                    </Paper>
                    <Paper>
                        VOR
                    </Paper>
                    <Paper>
                        ILS
                    </Paper>
                    <Paper>
                        TACAN
                    </Paper>
                    <Paper>
                        DME
                    </Paper>


                </Grid>

            </Grid>

            <Divider />

            <Grid item container
                xs={8}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                    
                <img src={usabilityRoutes} alt="usabilityRoutes" />
                <Typography fontSize={30} fontFamily='ariel'>שמישות מסלולים</Typography >

                {/* <Grid item
                    // direction="row-reverse"
                    // justifyContent="flex-start"
                    // alignItems="center"
                    >
                    <img src={usabilityRoutes} alt="usabilityRoutes" />
                    <Typography fontSize={30} fontFamily='ariel'>שמישות מסלולים</Typography >
                </Grid> */}

                <Grid container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center">
                    <Paper>
                        03L/21R
                    </Paper>
                    <Paper>
                        03R/21L
                    </Paper>
                    <Paper>
                        03Z/21Z
                    </Paper>


                </Grid>

            </Grid>

        </Grid>

    );
}

export default Content;
