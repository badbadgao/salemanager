import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from 'containers/Table';

class App extends React.Component {
	render() {
 		return (
			<div>
				<MuiThemeProvider>
					<Table />
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
