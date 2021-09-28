import * as React from 'react';
import Grid from '@mui/material/Grid';
import { FirstLight, LastLight } from '.';
import { logo } from '../Assets'
import '../App.css';

/**
 * Represent the Header bar in the application,
 * contain the logo and generic data
 * @param {Entity for first/last light} props 
 * @returns 
 * @author Orel Cohen
 * @todo - for the first/last light use in <DrawnInfo/> comp
 */
function HeaderGrid(props) {
    return (
        <Grid
            container item
            direction="row"
            alignItems="center"
            className="HeaderBox">

            {/* @todo - organize in 2 grids */}
            <Grid item>
                <FirstLight />
            </Grid>
            <Grid item>
                <LastLight />
            </Grid>
            <Grid item>
                <img src={logo} alt="logo" className="Logo" />
            </Grid>
        </Grid>
    );
}

export default HeaderGrid;
