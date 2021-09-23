import { Paper } from '@material-ui/core';
import { Typography, Grid } from '@mui/material';
import * as React from 'react';
import '../App.css';


function DrawnInfo(props) {
    return (
        <Grid container

            direction={props.direction ? props.direction : "column"}
            justifyContent="space-around"
            alignItems="center">

            <img src={props.icon} alt={props.icon} />
            <Typography
                align='center'
                style={props.infoStyle}
                >

                {props.info ? props.info : "-"}
            </Typography>

        </Grid>
        // <div>
        //     <img src={props.icon} alt={props.icon}/>
        //     <Typography
        //         align='center'
        //         style={props.infoStyle}>

        //         {props.info}
        //     </Typography>
        // </div>
    );
}

export default DrawnInfo;



// <Grid container
//             direction={props.direction ? props.direction : "column"}
//             justifyContent="space-around"
//             alignItems="center">

//             <img src={props.icon} alt={props.icon} />
//             <Typography
//                 align='center'
//                 style={props.infoStyle}
//                 >

//                 {props.info}
//             </Typography>

//         </Grid>