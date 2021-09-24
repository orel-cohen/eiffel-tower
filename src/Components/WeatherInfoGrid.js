import { Paper } from '@material-ui/core';
import { Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { weatherInfo, devicesCloudIcon } from "../Assets";
import React, { useEffect, useState } from 'react';
import { DrawnInfo } from '.';
import '../App.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: 100,
    height: 100,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Heebo'
}));
function WeatherInfoGrid(props) {
    const [entity, setEntity] = useState(props.entity)

    useEffect(() => {
        if (props.entity) {
            setEntity(props.entity);
        } else {
            console.log("not load");
        }
    })

    if (entity) {

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
                    <img src={weatherInfo} alt="weatherInfo" />
                    <Typography fontSize={30} fontFamily='Heebo'>נתונים מטראולוגים</Typography >
                </Grid>

                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center">
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={entity.weatherStatus.temperature + '°'} />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={entity.weatherStatus.visibility}
                        />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info='כיוון הרוח' />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info='ראות' />
                    </Grid>
                    <Grid item>
                        <Divider style={{
                            background: '#70707080',
                            opacity: 1,
                            width: 1,
                            height: 100
                        }} />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info='מעלות' />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info='לחות' />
                    </Grid>
                    <Grid item>
                        <Divider style={{
                            background: '#70707080',
                            opacity: 1,
                            width: 1,
                            height: 100
                        }} />
                    </Grid>
                    <Grid item>

                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info='58%' />
                    </Grid>
                    {/* <Item>כיוון הרוח</Item>
                    <Item>ראות</Item>
                    <Divider />
                    <Item>מעלות</Item>
                    <Item>לחות</Item>
                    <Divider />
                    <Item>משו לא ברור</Item> */}

                </Grid>

            </Grid>
            // <div>
            //     <DrawnInfo
            //     icon={devicesCloudIcon}
            //     info='25'/>
            //     <DrawnInfo
            //     icon={devicesCloudIcon}
            //     info='58%'/>
            //     <DrawnInfo
            //     icon={devicesCloudIcon}
            //     info='25`'/>
            // </div>
        );
    } else {
        return (
            <Typography>Loading</Typography>
        )
    }
}

export default WeatherInfoGrid;
