import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddy, updateState, updateCity, updateZipCode } from '../ducks/reducer';

class StepOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }
    }

    updateNames(e) {
        this.setState({
            name: e.target.value
        })
    }
    upateAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    upateCities(e) {
        this.setState({
            city: e.target.value
        })
    }
    upateStates(e) {
        this.setState({
            state: e.target.value
        })
    }
    upateZipCodes(e) {
        this.setState({
            zipCode: e.target.value
        })
    }

    render() {
        let { name, address, city, state, zipCode } = this.state;
        let { updateName, updateAddy, updateState, updateCity, updateZipCode } = this.props
        console.log('from redux',this.props.name)
        return (
            <div>
                <div>
                    <input value={name} placeholder='name' onChange={(e) => this.updateNames(e)} />
                    <input value={address} placeholder='address' onChange={(e) => this.upateAddress(e)} />
                    <input value={city} placeholder='city' onChange={(e) => this.upateCities(e)} />
                    <input value={state} placeholder='state' onChange={(e) => this.upateStates(e)} />
                    <input value={zipCode} placeholder='zipcode' onChange={(e) => this.upateZipCodes(e)} />
                </div>
                <Link to='/wizard/step2'><button onClick={(e) => {
                    updateZipCode(zipCode);
                    updateName(name);
                    updateAddy(address);
                    updateCity(city);
                    updateState(state);
                }}>Next</button></Link>
            </div>
        );
    }
}


function stateToProps(reduxState) {
    return {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode
    }
}

const dispatchToProps = {
    updateName,
    updateAddy,
    updateState,
    updateCity,
    updateZipCode
}

export default connect(stateToProps, dispatchToProps)(StepOne);