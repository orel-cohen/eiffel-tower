import React, { useEffect, useState } from 'react';
import BaseStatusCard from "./BaseStatusCard";
import { Divider, Grid } from '@mui/material';



function Footer() {
    const [icons, setIcons] = useState([])

    useEffect(() => {
        // <CheckCircleIcon color="success" />

    })
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Divider className="Divider" />
            </Grid>
            <Grid container item
                justifyContent='space-evenly'>
                <React.Fragment>
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    <BaseStatusCard />
                    <BaseStatusCard />
                    <BaseStatusCard />
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <BaseStatusCard />
                    {/* </Grid> */}


                </React.Fragment>
            </Grid>
        </Grid>


    );
}

export default Footer;
