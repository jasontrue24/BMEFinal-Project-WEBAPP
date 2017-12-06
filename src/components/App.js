import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './Upload';
import Sites from './Sites';

class App extends Component {
  render() {
    return ( 
      <div>
	  	<MuiThemeProvider>
			<AppBar title="Melanoma Detector" showMenuIconButton={false}/>
			<Upload />
			<Sites />
		
		</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
