import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import { baseIcon, editIcon } from "../Assets";
import * as React from 'react';
import { DrawnInfo } from '.';
import '../App.css';


function SelectedBaseGrid(props) {
    return (
        <Grid item container
            xs={12}
            direction="row-reverse" // ltr/up to down is default
            justifyContent="flex-start" // where to locate the group
            alignItems="center">

            <img src={baseIcon} alt="BaseIcon" />
            <Typography fontSize={30} fontFamily='Heebo'>בח"א 10</Typography >
            <img src={editIcon} alt="EditIcon" />

        </Grid>
    );
}

export default SelectedBaseGrid;
