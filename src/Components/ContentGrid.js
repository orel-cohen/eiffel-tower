import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import "../App.css";
import "../Fonts.css";
import Paper from '@mui/material/Paper';
import { FieldStatusGrid, LoweringDevicesGrid, SelectedBaseGrid, UsabilityRoutesGrid, WeatherInfoGrid } from '.';



function ContentGrid(props) {
    React.useEffect(() => {
        // console.log("content-->");
        // console.log(props.entity);
    })
    return (
        <Grid item container
            spacing={2}
            direction="row-reverse"
            justifyContent="space-evenly"
            alignItems="center">

            <SelectedBaseGrid />
            <FieldStatusGrid />

            <Divider style={{
                background: '#70707080',
                opacity: 1,
                width: 1,
                height: 230
            }} />
            <WeatherInfoGrid 
            
            entity={props.entity}
            />
            {/* <Grid item>
                <Divider style={{
                background: '#70707080',
                opacity: 1,
                width: 1700,
                height: 0.5,
            }}/>
            </Grid> */}
            
            <LoweringDevicesGrid />
            <Divider style={{
                background: '#70707080',
                opacity: 1,
                width: 1,
                height: 230
            }} />
            <UsabilityRoutesGrid />

        </Grid>

    );
}

export default ContentGrid;


// old

{/* <SelectedBaseGrid /> */ }
{/* <Grid item container
                xs={12}
                direction="row-reverse" // ltr/up to down is default
                justifyContent="flex-start" // where to locate the group
                alignItems="center">

                <img src={baseIcon} alt="BaseIcon" />
                <Typography fontSize={30} fontFamily='Heebo'>בח"א 10</Typography >
                <img src={editIcon} alt="EditIcon" />

            </Grid> */}


// <FieldStatusGrid />
{/* <Grid item container
                xs={4}
                direction="row-reverse"
                justifyContent="space-around"
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
                    justifyContent="space-around"
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
            </Grid> */}


// <WeatherInfoGrid />
{/* <Grid item container
                xs={8}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={weatherInfo} alt="weatherInfo" />
                    <Typography fontSize={30} fontFamily='Heebo'>נתונים מטראולוגים</Typography >
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

            </Grid> */}


// <LoweringDevicesGrid />
{/* <Grid item container
                xs={4}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={loweringDevices} alt="loweringDevices" />
                    <Typography fontSize={30} fontFamily='Heebo'>מכשירי הנמכה</Typography >
                </Grid>

                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <LoweringDevice
                        icon={<CheckCircleIcon color="success" />}
                        title="GCA" />
                    <LoweringDevice
                        icon={<CheckCircleIcon color="success" />}
                        title="VOR" />
                    <LoweringDevice
                        icon={<CancelIcon color="error" />}
                        title="ILS" />
                    <LoweringDevice
                        icon={<CancelIcon color="disabled" />}
                        title="TACAN" />
                    <LoweringDevice
                        icon={<CancelIcon color="error" />}
                        title="DME" />
                </Grid>

            </Grid> */}


// <UsabilityRoutesGrid />
{/* <Grid item container
                xs={8}
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
            </Grid> */}