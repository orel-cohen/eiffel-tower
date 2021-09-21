import * as React from 'react';
import '../App.css';
import {firstLight} from '../Assets';
import { Typography } from '@mui/material';



function FirstLight() {
    return (
        <div style={{justifyContent: 'center'}}>
            <img src={firstLight} alt="logo" className="LightIcons" />
            <Typography>
                05:20
            </Typography>
        </div>

    );
}

export default FirstLight;
