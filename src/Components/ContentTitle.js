import React from 'react'
import { Typography, Grid } from '@mui/material';

/**
 * 
 * @param {*} props 
 * @returns 
 * @author Orel Cohen
 */
function ContentTitle(props) {
    return (
        <Grid container item
            spacing={2}
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center">
            <Grid item>
                <img src={props.icon} alt="TitleIcon" />
            </Grid>
            <Grid item>
                <Typography fontSize={30} fontFamily='Heebo' font='28px/41px'>{props.title}</Typography >
            </Grid>
        </Grid>
    )
}

export default ContentTitle
