import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import "../App.css";
import "../Fonts.css";
import Paper from '@mui/material/Paper';
import { DividerItem, FieldStatusGrid, LoweringDevicesGrid, SelectedBaseGrid, UsabilityRoutesGrid, WeatherInfoGrid } from '.';


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
    },[props.entity])
    return (
        <Grid container item
            spacing={3}
            direction="row-reverse"
            justifyContent="center"
            alignItems="stretch">
            
            <SelectedBaseGrid />
            <FieldStatusGrid entity={props.entity}/>

           <DividerItem orientation='vertical' className={"BigVerticalDivider"}/>

            <WeatherInfoGrid entity={props.entity}/>

            <DividerItem xs={10} orientation='horizontal' className={"BigVerticalDivider"}/>

            <LoweringDevicesGrid entity={props.entity}/>

            <DividerItem orientation='vertical' className={"BigVerticalDivider"}/>


            <UsabilityRoutesGrid entity={props.entity}/>

        </Grid >

    );
}

export default ContentGrid;

