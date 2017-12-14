import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import axios from 'axios'
//import RaisedButton from 'material-ui/RaisedButton';

class Upload extends Component {
	constructor() {
		super();
		this.state = {
			currentImageString: '',
			resultString:[],
			predictions : [],
		}
	} 

	
        onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
 axios.post('http://vcm-1006.vm.duke.edu:8000/classify',{data: reader.result}).then( (response)=> {
                        console.log("success!");
                        console.log(response);
                        this.setState({resultString: response.data.labels[0]});
                        this.setState({predictions: Math.round(response.data.predictions[0]*100).toFixed(2)})
                }).catch( (error)=> {
                        console.log("failed to upload into api");
                });

		}
}
	
	
render() {
		return (
			<div>
				<h5>Upload your image below: </h5>	
				<UploadField onFiles={this.onUpload}>
					<div style={{
							width: '300px',
    						height: '300px',
    						background: 'LightSkyBlue',
							}}>
						
					</div>	
				</UploadField>
				<img src={this.state.currentImageString} />

  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" onClick={this.getData} active>Here is the result</Button>
  </ButtonToolbar>


{this.state.predictions == ""? "No Data":  "There is "+this.state.predictions +" % chance is "+  this.state.resultString}


			</div>
		)
	}
}

export default Upload;
