import * as React from 'react';
import { Grid } from '@mui/material';
import { DividerItem, FieldStatusGrid, LoweringDevicesGrid, SelectedBaseGrid, UsabilityRoutesGrid, WeatherInfoGrid } from '.';
import "../App.css";
import "../Fonts.css";


/**
 * Represent all the content in the app, responsible ao pass entity to 
 * the differnt grid for display the info
 * @param {Entity} props 
 * @returns 
 * @author Orel Cohen
 */
function ContentGrid(props) {
    React.useEffect(() => {
        // console.log("content-->");
        // console.log(props.entity);
    }, [props.entity])
    return (
        <Grid
            container
            item
            spacing={3}
            direction="row-reverse"
            justifyContent="center"
            alignItems="stretch">

            <SelectedBaseGrid />
            <FieldStatusGrid entity={props.entity} />
            <DividerItem orientation='vertical' className={"LightDivide"} />
            <WeatherInfoGrid entity={props.entity} />
            <DividerItem xs={10} orientation='horizontal' className={"LightDivide"} />
            <LoweringDevicesGrid entity={props.entity} />
            <DividerItem orientation='vertical' className={"LightDivide"} />
            <UsabilityRoutesGrid entity={props.entity} />

        </Grid >

    );
}

export default ContentGrid;

