import React, {useState, useEffect} from 'react';
import '../App.css';
import { Typography, Grid } from '@mui/material';
import { LoweringDevice, ContentTitle } from '.';
import { loweringDevices } from "../Assets";


/**
 * Represent status of lowering devices in entity
 * @param {Entity} props 
 * @returns 
 * @author Orel Cohen
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
            <Grid container item
                spacing={2}
                xs={3}
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="center"
                >

                <ContentTitle icon={loweringDevices} title="מכשירי הנמכה" />
    
                <Grid container item
                    direction="row-reverse"
                    justifyContent="space-between"
                    alignItems="flex-start"
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
