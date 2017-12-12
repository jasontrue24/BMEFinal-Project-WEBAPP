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
                        resultString: '',
		}
	} 

	
        onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
 axios.post('http://127.0.1:5000/api/images',{data: reader.result}).then( (response)=> {
                        console.log("success!");
                        console.log(response);
                        this.setState({resultString: response.data});
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
							width:'200px', 
							height:'200px',
							textAlign: 'center'}}>
						Upload here
					</div>	
				</UploadField>
				<img src={this.state.currentImageString} />
                               <RaisedButton label = "Check Results" primary={true} onClick={this.getData}/>
                               {
                                
                                 this.state.resultString
                               }
			</div>
		)
	}
}

export default Upload;
