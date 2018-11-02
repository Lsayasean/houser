import React, { Component } from 'react';
import { Link , Route} from 'react-router-dom';
import StepOne from '../../steps/StepOne';
import StepTwo from '../../steps/StepTwo';
import StepThree from '../../steps/StepThree';
import {connect} from 'react-redux';
import {clear} from '../../ducks/reducer'

class Wizard extends Component {

    render() {
        return (
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepTwo} />
                <Route path='/wizard/step3' component={StepThree} />

            </div>

        );
    }
}
const dispatchToPorps = {
    clear
}

export default connect(null, clear)(Wizard);