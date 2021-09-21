import * as React from 'react';
import BaseStatusCard from "./BaseStatusCard";
import { Grid } from '@mui/material';

function Footer() {
    return (
        <React.Fragment>
            <Grid item>
                <BaseStatusCard />
            </Grid>
            <Grid item>
                <BaseStatusCard />
            </Grid>
            <Grid item>
                <BaseStatusCard />
            </Grid>
            <Grid item>
                <BaseStatusCard />
            </Grid>
            <Grid item>
                <BaseStatusCard />
            </Grid>
            <Grid item>
                <BaseStatusCard />
            </Grid>


        </React.Fragment>
    );
}

export default Footer;
