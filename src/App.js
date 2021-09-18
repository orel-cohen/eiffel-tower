import * as React from 'react';

import { Header, Content, Footer } from "./Components"
import './App.css';
import { Divider, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={12} className="ContentAndHeader">
          <Header />
          <Content />
        </Grid>
        <Grid item xs={12}>
          <Divider className="Divider" />
        </Grid>
        <Grid container spacing={1}>
          <Footer />
        </Grid>
      </Grid>
    </div>

  );
}

export default App;