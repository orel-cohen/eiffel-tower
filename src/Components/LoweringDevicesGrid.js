import React, {useState, useEffect} from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { LoweringDevice } from '.';
import { loweringDevices } from "../Assets";


/**
 * Represent status of lowering devices in entity
 * @param {Entity} props 
 * @returns 
 */
function LoweringDevicesGrid(props) {
    const [entity, setEntity] = useState(props.entity)
    const [gcaUsability, setGcaUsability] = useState()
    const [ilsUsability, setIlsUsability] = useState()
    const [tacanUsability, setTacanUsability] = useState()
    const [vorUsability, setVorUsability] = useState()
    const [ndbUsability, setNdbUsability] = useState()



    useEffect(() => {
        console.log(props);
        if (props.entity) {
            setEntity(props.entity);
            setGcaUsability(props.entity.gcaUsability.hebrewValue)
            setIlsUsability(props.entity.ilsUsability.hebrewValue)
            setTacanUsability(props.entity.tacanUsability.hebrewValue)
            setVorUsability(props.entity.vorUsability.hebrewValue)
            setNdbUsability(props.entity.ndbUsability.hebrewValue)
        } else {
            console.log("not load");
        }
    })

    
    if (entity) {
        return (
            <Grid item container
                xs={3}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center">
    
                <Grid container
                    direction="row-reverse"
                    justifyContent="flex-start"
                    alignItems="center">
                    <img src={loweringDevices} alt="loweringDevices" />
                    <Typography fontSize={30} fontFamily='Heebo'>מכשירי הנמכה</Typography >
                </Grid>
    
                <Grid container
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="stretch"
                >
                    <LoweringDevice
                        usability={gcaUsability}
                        title="GCA" />
                    <LoweringDevice
                        usability={vorUsability}
                        title="VOR" />
                    <LoweringDevice
                        usability={ilsUsability}
                        title="ILS" />
                    <LoweringDevice
                        usability={tacanUsability}
                        title="TACAN" />
                    <LoweringDevice
                        usability={ndbUsability}
                        title="NDB" />
                </Grid>
    
            </Grid>
            );
    } else {
        return(
            <Typography>
                load
            </Typography>
        );
    }
    
    
}

export default LoweringDevicesGrid;
