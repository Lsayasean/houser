import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../ducks/reducer';

class StepTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: ''
        }
    }

    updateImages(e) {
        this.setState({
            image: e.target.value
        })
    }

    render() {
        let { image } = this.state;
        let {updateImage} = this.props;
        console.log('function',updateImage)
        return (
            <div>
                <div>
                    <input value={image} placeholder='image' onChange={(e) => this.updateImages(e)} />
                </div>
                <Link to='/wizard/step3'><button onClick={(e) => updateImage(image)}> Next</button></Link>
                <Link to='/wizard/step1'><button onClick={(e) => updateImage(image)}> Back</button></Link>
            </div>
        );
    }
}

function stateToProps(reduxState) {
    return {
        name: reduxState.name,
    }
}

const dispatchToProps = {
    updateImage
}

export default connect(stateToProps, dispatchToProps)(StepTwo);