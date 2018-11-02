import React from 'react';


export default function House(props){
    console.log(props.data)
    return(
        <div>
            <div>
            {props.data.name}
            <br></br>
            {props.data.address}
            <br></br>
            {props.data.city}
            <br></br>
            {props.data.state}
            <br></br>
            {props.data.zipcode}
            <div >
            <img src={props.data.image} style={{
                width: '100px',
                height: '100px'
            }}/>
            </div>
            
            <br></br>
            morgage
            {props.data.monthly_morgage_amount}
            <br></br>
            rent 
            {props.data.desired_rent}

            </div>
            <button onClick={() => props.deleted(props.data.id)}>Delete</button>
            
        </div>
    )
}