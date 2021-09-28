import React, { useEffect, useState } from 'react';
import { HeaderGrid, ContentGrid, FooterGrid } from "./Components"
import './App.css';
import { Grid } from '@mui/material';
import axios from 'axios';

/**
 * Responsible to fetch the data and pass it to grids.
 * @returns Main part
 * @author Orel Cohen
 */
function App() {
  const isTest = false;
  const [entity, setEntity] = useState()

  useEffect(() => {
    axios.get('BaseStatusArr.json')
      .then(response => {
        // in case of request specific entity
        setEntity(response.data.data.baseStatus[0])
      })
  }, [])

  return (
    <Grid
      container
      rowSpacing={2}
      className="App"
      direction="column"
    >
      <HeaderGrid className='ContentAndHeader' />
      <ContentGrid className='ContentAndHeader' entity={entity} />
      <FooterGrid entity={entity} />

    </Grid>
  );
}

export default App;