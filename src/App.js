import * as React from 'react';

import { Header, Content, Footer } from "./Components"
import './App.css';
import { Divider, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container
        direction="column"
        alignItems="stretch">

        <Grid item container
          xs={12}
          className="ContentAndHeader">
          <Header />
          <Content />
        </Grid>

        <Grid container spacing={1}>
          <Divider className="Divider" />
          <Footer />
        </Grid>

      </Grid>
    </div>

  );
}

export default App;