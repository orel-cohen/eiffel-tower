import * as React from 'react';
import '../App.css';
import {lastLight} from '../Assets';
import { Typography } from '@mui/material';


function LastLight() {
    return (
        <div>
            <img src={lastLight} alt="LastLightIcon" className="LightIcons" />
            <Typography>
                18:20
            </Typography>
        </div>

    );
}

export default LastLight;
