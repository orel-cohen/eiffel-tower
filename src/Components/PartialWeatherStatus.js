import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { devicesCloudIcon, editIcon } from "../Assets";
import { DrawnInfo } from '.';
import '../App.css';


/**
 * Functional component that represent part of weather status,
 * and display it depending on parent component
 * @param {Entity - use just in WeatherStatus member} props Route info from entity
 * @returns 
 * @author Orel Cohen
 * @todo Parse entity from props to useState member and set info in comp
 */
function PartialWeatherStatus(props) {
    const [entity, setEntity] = useState(props.entity)
    const [cloudCover, setCloudCover] = useState()
    const [cloudBase, setCloudBase] = useState()
    const [cloudCeiling, setCloudCeiling] = useState()
    const [visibility, setVisibility] = useState()
    const [windDirection, setWindDirection] = useState()
    const [windStrength, setWindStrength] = useState()
    const [isFooter, setIsFooter] = useState(props.isFooter)

    useEffect(() => {
        if (props.entity) {
            setEntity(props.entity);
            setCloudCover(props.entity.weatherStatus.cloudCover.hebrewValue)
            setCloudBase(props.entity.weatherStatus.cloudBase)
            setCloudCeiling(props.entity.weatherStatus.cloudCeiling)
            setVisibility(props.entity.weatherStatus.visibility)
            setWindDirection(props.entity.weatherStatus.windDirection)
            setWindStrength(props.entity.weatherStatus.windStrength)

        } else {
            console.log("not load");
        }
    })

    if (entity) {

        return (
            <Grid container item 
                xs={isFooter ? 12 : 6 }
                direction="row-reverse"
                justifyContent="space-around"
                alignItems="stretch">

                <Grid item xs={isFooter ? 5 : 0}>
                    <DrawnInfo
                        icon={editIcon}
                        info={cloudCover}
                    />
                </Grid>

                <Grid container item xs={5}
                spacing={2}
                direction="column"
                justifyContent="space-around"
                alignItems="center">
                    <Grid item>
                        <DrawnInfo
                            icon={editIcon}
                            info={cloudBase ? cloudBase : "בסיס ענן"}
                            direction={'row-reverse'}
                        />
                    </Grid>

                    <Grid item>
                        <DrawnInfo
                            icon={editIcon}
                            info={cloudCeiling ? cloudCeiling : "פסגת ענן"}
                            direction={'row-reverse'} />
                    </Grid>
                </Grid>


                <Grid item>
                    <DrawnInfo
                        icon={devicesCloudIcon}
                        info={windDirection + "," + windStrength} />
                </Grid>
                <Grid item>
                    <DrawnInfo
                        icon={devicesCloudIcon}
                        info={visibility} />
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

export default PartialWeatherStatus;
