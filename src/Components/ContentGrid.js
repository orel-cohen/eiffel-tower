import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import "../App.css";
import "../Fonts.css";
import Paper from '@mui/material/Paper';
import { FieldStatusGrid, LoweringDevicesGrid, SelectedBaseGrid, UsabilityRoutesGrid, WeatherInfoGrid } from '.';


/**
 * Represent all the content in the app, responsible ao pass entity to 
 * the differnt grid for display the info
 * @param {Entity} props 
 * @returns 
 */
function ContentGrid(props) {
    React.useEffect(() => {
        // console.log("content-->");
        // console.log(props.entity);
    })
    return (
        <Grid container item
            spacing={3}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center">
            
            <SelectedBaseGrid />
            <FieldStatusGrid />

            <Grid item xs={1}>
                <Divider style={{
                    background: '#70707080',
                    opacity: 1,
                    width: 1,
                    height: 230
                }} />
            </Grid>

            <WeatherInfoGrid
                entity={props.entity}/>

            <Grid item>
                <Divider style={{
                    background: '#70707080',
                    opacity: 1,
                    width: 1700,
                    height: 0.5,
                }} />
            </Grid>

            <LoweringDevicesGrid />

            <Grid item xs={1}>
                <Divider style={{
                    background: '#70707080',
                    opacity: 1,
                    width: 1,
                    height: 230
                }} />
            </Grid>

            <UsabilityRoutesGrid />

        </Grid >

    );
}

export default ContentGrid;

