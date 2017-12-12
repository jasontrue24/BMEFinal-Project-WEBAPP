import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Sites extends Component {

    state = {
        'sites': '',
    }

    getData = () => {
        axios.get('http://vcm-1837.vm.duke.edu:5000/api/Melanoma').then( (data) =>{
            console.log(data);
            this.setState({'sites': data.data});
        });
    }
    render() {
        return (
            <div>
                <RaisedButton label="Check Results" primary={true} onClick={this.getData}/>
            {
                (this.state.sites.length > 0) ? this.state.sites: "NO DATA"
            }
            </div>
        )
    }
}

export default Sites;
