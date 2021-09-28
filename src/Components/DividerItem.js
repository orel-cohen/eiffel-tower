import * as React from 'react';
import { Divider, Grid } from '@mui/material';
import '../App.css';

/**
 * Wrapping to divider from material ui to expand the props
 * @param {xs-column number, orientation, className} props 
 * @returns 
 * @author Orel Cohen
 */
function DividerItem(props) {
    console.log(props.className);
    return (
        <Grid item xs={props.xs ? props.xs : 0}>
            <Divider orientation={props.orientation} className={`${props.className}`} />
        </Grid>
    );
}

export default DividerItem;


