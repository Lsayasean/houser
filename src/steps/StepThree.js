import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateMorgage, updateRent} from '../ducks/reducer';
import axios from 'axios';

class StepThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            morgages: '',
            rents: ''
        }
    }

    updateMorgages(e) {
        this.setState({
            morgages: e.target.value
        })
    }
    upateRents(e) {
        this.setState({
            rents: e.target.value
        })
    }

    complete() {
        let {morgages , rents } = this.state;
        let {name,address,city,state,zipcode,image} = this.props

        axios.post('/api/create', { name: name, address: address, city: city, state: state, zipCode:  zipcode, image: image, monthly: morgages, rent: rents})
        .then(res => {
        })
    }

    render() {
        let { morgages, rents} = this.state;
        let {updateMorgage, updateRent} = this.props;

        return (
            <div>
                <div>
                    <input value={morgages} placeholder='morgage' onChange={(e) => this.updateMorgages(e)} />
                    <input value={rents} placeholder='rent' onChange={(e) => this.upateRents(e)} />
                </div>
                <Link to='/'><button onClick={() => this.complete()}>Complete</button></Link>
                <Link to='/wizard/step2'><button onClick={(e)=>{
                    updateMorgage(morgages);
                    updateRent(rents);
                }}>
                Back</button></Link>

            </div>
        );
    }
}

function stateToProps(reduxState){
    return {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode,
        image: reduxState.image
    }
}

const dispatchToProps = {
    updateMorgage, updateRent
}

export default connect(stateToProps, dispatchToProps)(StepThree);