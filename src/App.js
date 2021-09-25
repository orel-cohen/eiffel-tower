import React, { useEffect, useState } from 'react';

import { HeaderGrid, ContentGrid, FooterGrid, WeatherInfoGrid } from "./Components"
import './App.css';
import { Grid } from '@mui/material';
import axios from 'axios';


function App() {
  const isTest = false;
  const [entity, setEntity] = useState()

  useEffect(() => {
    axios.get('BaseStatusArr.json')
      .then(response => {
        // console.log("--> " + JSON.stringify(response.data))
        setEntity(JSON.parse(JSON.stringify(response.data)))
        // console.log(entity);
      })
  }, [entity])

  if (isTest) {
    return (
      <Grid container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <WeatherInfoGrid />
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        spacing={2}
        className="App"
        direction="column"
      >
        <HeaderGrid
          className='ContentAndHeader' />
        <ContentGrid
          className='ContentAndHeader'
          entity={entity} />

        <FooterGrid />
      </Grid>
    );
  }
}

export default App;


// header and content
{/* <Grid container spacing={3}
            direction="column"
            alignItems="stretch"
            className="ContentAndHeader">

            <Header />
            <Content />

          </Grid> */}

// footer
{/* <Grid container spacing={2}>
            <Grid item>
              <Divider className="Divider" />
            </Grid>
            <Grid container item
              justifyContent='space-evenly'
            >
              <Footer />

            </Grid>
          </Grid> */}