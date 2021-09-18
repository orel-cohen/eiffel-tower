import * as React from 'react';
import BaseStatusCard from "./BaseStatusCard";
import { Grid } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>
            <Grid item xs={1.5}>
                <BaseStatusCard />
            </Grid>


        </>
    );
}

export default Footer;
