// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Table from 'containers/Table';

const App = () => (
  <div>
    <MuiThemeProvider>
      <Table
        name="wei's table"
      />
    </MuiThemeProvider>
  </div>
);

export default App;
