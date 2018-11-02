import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../house/House'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state ={
            houses: []
        }
        this.delete = this.delete.bind(this)
    }

    componentDidMount(){
        axios.get('/api/get-all').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    delete(id){
        axios.delete(`/api/delete/${id}`).then(res => {
            axios.get('/api/get-all').then(results => {
                this.setState({
                    houses: results.data
                })
            })
        })
    }


    render() {  
        let {houses} = this.state;
         let house = houses.map(ele => {
            return (
                <div key={ele.id}><House 
                data = {ele}
                deleted = {this.delete}
                /></div>
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {house}
            </div>
        );
    }
}

export default Dashboard;