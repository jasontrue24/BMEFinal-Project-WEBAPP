import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';

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
 axios.post('http://0.0.0.0:8000/api/images',{data: reader.result}).then( (response)=> {
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
				<h2>Upload your image</h2>	
				<UploadField onFiles={this.onUpload}>
					<div style={{
							backgroundColor: 'gray', 
							width:'600px', 
							height:'400px',
							textAlign: 'center'}}>
						Upload here
                                                <img src={this.state.currentImageString} />
					</div>	
				</UploadField>
				
                               <RaisedButton label = "Here is the result" primary={true} onClick={this.getData}/>
                               {
                                
                               this.state.predictions == ""? "No Data":  "There is "+this.state.predictions +" % chance is "+  this.state.resultString
                               }
			</div>
		)
	}
}

export default Upload;
