import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import axios from 'axios'

class Upload extends Component {
	constructor() {
		super();		
		this.state = {
			currentImageString: '',
		}
	} 

	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
		}
		axios.post('http://vcm-1006.vm.duke.edu:5000/api/images',reader.result).then(function (response) {
			console.log("success!");
		}).catch(function (error) {
			console.log("failed to upload into api");
		});
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
			</div>
		)
	}
}

export default Upload;