import { Paper } from '@material-ui/core';
import { Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { weatherInfo, devicesCloudIcon } from "../Assets";
import React, { useEffect, useState } from 'react';
import { DrawnInfo, DividerItem } from '.';
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
 */
function WeatherInfoGrid(props) {
    const [entity, setEntity] = useState(props.entity)
    // const [cloudCover, setCloudCover] = useState()
    // const [cloudBase, setCloudBase] = useState()
    // const [cloudCeiling, setCloudCeiling] = useState()
    // const [visibility, setVisibility] = useState()
    // const [windDirection, setWindDirection] = useState()
    // const [windStrength, setWindStrength] = useState()
    const [temperature, setTemperature] = useState()
    const [humidity, setHumidity] = useState()
    const [inchPressure, setInchPressure] = useState()
    const [milibarPressure, setMilibarPressure] = useState()


    useEffect(() => {
        if (props.entity) {
            setEntity(props.entity);
            // setCloudCover(props.entity.weatherStatus.cloudCover.hebrewValue)
            // setCloudBase(props.entity.weatherStatus.cloudBase)
            // setCloudCeiling(props.entity.weatherStatus.cloudCeiling)
            // setVisibility(props.entity.weatherStatus.visibility)
            // setWindDirection(props.entity.weatherStatus.windDirection)
            // setWindStrength(props.entity.weatherStatus.windStrength)
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


                <Grid container item
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={weatherInfo} alt="weatherInfo" />
                    <Typography fontSize={30} fontFamily='Heebo'>נתונים מטראולוגים</Typography >
                </Grid>

                <Grid container item
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="stretch">

                    <PartialWeatherStatus entity={props.entity} />
                    <DividerItem orientation='vertical' className={"BigVerticalDivider"}/>

                    {/* <Grid item>
                        <Divider style={{
                            background: '#70707080',
                            opacity: 1,
                            width: 1,
                            height: 100
                        }} />
                    </Grid> */}

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
                            info={inchPressure} />
                    </Grid>
                    <Grid item>
                        <DrawnInfo
                            icon={devicesCloudIcon}
                            info={milibarPressure} />
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
