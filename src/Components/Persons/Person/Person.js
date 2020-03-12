import React, { Component } from 'react';
import Radium from 'radium';

class Person extends Component{
    render()
    {
        console.log("[Person.js] rendering...")
        const card = {
            textAlign: "center",
            backgroundColor: "lightgreen",
            margin: "16px auto 16px auto",
            padding: "8px 16px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            width: "40%",
            borderRadius: "5px",
            ":hover":{
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
            }
        };
        const inputStyle = {
            padding: "8px",
            ":hover":{
                backgroundColor: "powderblue"
            },
            ":focus":{
                backgroundColor: "black",
                color: "white"
            }
        };
        return (
            <div style={card}>
                <p> Hello my name is {this.props.name} and I am {this.props.age} years old</p>
                <input 
                type = "text"
                style = {inputStyle} 
                key = {this.props.uniqueKey} 
                value = {this.props.name} 
                onChange = {this.props.changeName} />
            </div>
        )
    };
}
// const Person = (props) =>{

    
// }

export default React.memo(Radium(Person));