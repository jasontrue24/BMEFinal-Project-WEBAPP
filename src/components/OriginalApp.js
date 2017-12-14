import React, { Component } from 'react';
import {red500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './Upload';
import Sites from './Sites';
import DropDown from './dropDown';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: grey400,
    borderColor: grey300,
  },
  appBar: {
    height: 150,
  },
});

class App extends Component {

	render() {
		return (
			<div>
			<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
			<AppBar title="Melanoma Detector" showMenuIconButton={true}/>
			<DropDown />
			<Upload />
			<Sites />
			<div className='dropdown'> testing space </div> 
			</MuiThemeProvider>
			</div>
			);
	}
}

export default App;
