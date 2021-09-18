import * as React from 'react';
import BaseStatusCard from "./BaseStatusCard";
import { Grid } from '@mui/material';

function Footer() {
    return (
        <>
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


        </>
    );
}

export default Footer;
