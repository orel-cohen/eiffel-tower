import React, { useEffect, useState } from 'react';
import BaseStatusCard from "./BaseStatusCard";
import { Grid, Typography } from '@mui/material';
import { DividerItem } from ".";
import axios from 'axios';


/**
 * Represent the footer of the application, 
 * Designed to display other bases with their weather data 
 * @param {} props - Consider to pass in props the current selected base
 * @returns 
 * @author Orel Cohen
 */
function Footer() {
    const [entities, setEntities] = useState([])

    useEffect(() => {
        axios.get('BasesStatusWeather.json')
            .then(response => {
                setEntities(response.data.data.baseStatus)
            })
    }, [])

    if (entities.length != 0) {
        return (
            <Grid container item 
            spacing={4}
            alignItems='stretch'
            >
                <Grid item xs={12}>
                    <DividerItem className="Divider"/>
                </Grid>
                <Grid container item
                    direction='row-reverse'
                    justifyContent='space-evenly'>
                    {entities.map(ent => (
                        <BaseStatusCard entity={ent} />
                    ))}
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container item spacing={4}>
                <Typography>Loading</Typography>
            </Grid>


        );
    }
}

export default Footer;
