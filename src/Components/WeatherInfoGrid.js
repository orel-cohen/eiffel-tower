import { Paper } from '@material-ui/core';
import { Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { weatherInfo, devicesCloudIcon } from "../Assets";
import React, { useEffect, useState } from 'react';
import { DrawnInfo, DividerItem, ContentTitle } from '.';
import '../App.css';
import PartialWeatherStatus from './PartialWeatherStatus';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: 100,
    height: 100,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Heebo'
}));

/**
 * Represent the meteorological info from entity
 * @param {Entity} props 
 * @returns 
 * @author Orel Cohen
 */
function WeatherInfoGrid(props) {
    const [entity, setEntity] = useState(props.entity)
    const [temperature, setTemperature] = useState()
    const [humidity, setHumidity] = useState()
    const [inchPressure, setInchPressure] = useState()
    const [milibarPressure, setMilibarPressure] = useState()


    useEffect(() => {
        if (props.entity) {
            setEntity(props.entity);
            setTemperature(props.entity.weatherStatus.temperature)
            setHumidity(props.entity.weatherStatus.humidity)
            setInchPressure(props.entity.barometricPressureData.inchPressure)
            setMilibarPressure(props.entity.barometricPressureData.milibarPressure)
        } else {
            console.log("not load");
        }
    })

    if (entity) {
        return (
            <Grid item container
                xs={6}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">

                <ContentTitle icon={weatherInfo} title="נתונים מטראולוגים" />

                <Grid container item
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="stretch">

                    <PartialWeatherStatus entity={props.entity} />

                    <DividerItem orientation='vertical' className={"LightDivide"} />

                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={temperature + '°'} />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={humidity + "%"} />
                    </Grid>
                    <DividerItem orientation='vertical' className={"LightDivide"} />

                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={inchPressure + '\n' + milibarPressure}
                            direction={'row-reverse'}
                        />
                    </Grid>
                </Grid>
            </Grid>

        );
    } else {
        return (
            <Grid item
                xs={6}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">
                <Typography>Loading</Typography>
            </Grid>

        )
    }
}

export default WeatherInfoGrid;
