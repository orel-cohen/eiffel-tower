import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../App.css';
import { FirstLight, LastLight } from '.';
import {logo} from '../Assets'


function HeaderGrid() {
    return (
        <Grid container item className="HeaderBox">
            <Grid item xs={0.35}>
                <FirstLight />
            </Grid>
            <Grid item xs={0.35}>
                <LastLight />
            </Grid>
            <Grid xs={5}>
                {/** Empty Grid */}
            </Grid>
            <Grid xs={6}>
                <img src={logo} alt="logo" className="Logo" />
            </Grid>
        </Grid>
    );
}

export default HeaderGrid;
