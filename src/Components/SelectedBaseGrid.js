import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import { baseIcon, editIcon } from "../Assets";
import '../App.css';

/**
 * Display the selected base name
 * @param {*} props 
 * @returns 
 * @author Orel Cohen
 */
function SelectedBaseGrid(props) {
    return (
        <Grid item container
            spacing={2}
            direction="row-reverse" // ltr/up to down is default
            justifyContent="flex-start" // where to locate the group
            alignItems="center">
            <Grid item>
                <img src={baseIcon} alt="BaseIcon" />
            </Grid>
            <Grid item>
                <Typography fontSize={30} fontFamily='Heebo'>בח"א 10</Typography >
            </Grid>
            <Grid item>
                <img src={editIcon} alt="EditIcon" />
            </Grid>

        </Grid>
    );
}

export default SelectedBaseGrid;
