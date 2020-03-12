import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component{
    shouldComponentUpdate(){
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("[Persons.js] componentDidUpdate");
    }
    render(){
        console.log("[Persons.js] rendering...")
        return this.props.persons.map((value, index) => {
            return (
              <Person
              uniqueKey = {index}
              key = {index}
              name = {value.name}
              age = {value.age} 
              changeName = {(event) => this.props.changedName(event, index)}
              />
            );
        });
    };
}

export default Persons;