import { Paper } from '@material-ui/core';
import { Divider, Grid } from '@mui/material';
import * as React from 'react';
import '../App.css';


function DividerItem(props) {
    console.log(props.className);
    return (
        <Grid item 
        xs={props.xs ? props.xs : 0}
        >
            {/* <Divider style={{
                background: '#70707080',
                opacity: 1,
                width: 1,
                height: 230
            }} /> */}
            <Divider orientation={props.orientation} className={`${props.className}`} />
        </Grid>

    );
}

export default DividerItem;


