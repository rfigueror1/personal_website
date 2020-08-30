import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import theme from './theme.jsx'

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <Grid
      container spacing={3}
      display="flex"
      justify="center"
      direction="row"
    >
      <Grid item xs={12} align="center">
        <Profile/>
      </Grid>
    </Grid>
   </ThemeProvider>,
  document.getElementById('App')
);
