import React, { Component } from 'react';
import './App.css';
import Persons from './../Components/Persons/Persons';
import Radium from 'radium';
import Cockpit from './../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    person: [
      {name: "Abhi", age: 20},
      {name: "Apple", age: 3},
      {name: "Samsung", age: 10}
    ],
    showAllPersons: false,
    showWorld: true
  };

  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
  }

  changingNameHandler = (event, index) => {
    let oldPerson = [...this.state.person];
    oldPerson[index].name = event.target.value;
    this.setState( {person: oldPerson} )
  }

  changeButtonVisibility = (event, value) => {
    if(value === "person"){
      this.setState( {showAllPersons: !this.state.showAllPersons} );
    }
    else if(value === "deleteWorld"){
      this.setState( {showWorld: !this.state.showWorld} );
    }
  }

  render() {
    let personApp = null;
    if(this.state.showAllPersons === true){
      if(this.state.person.length > 0){
        personApp = <Persons persons={this.state.person} changedName = {this.changingNameHandler} />
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <Cockpit 
          showWorld={this.state.showWorld} 
          togglePersonVisibilty = { (event) => {this.changeButtonVisibility(event, "person")} }
          toggleWorldVisibilty = { (event) => {this.changeButtonVisibility(event, "deleteWorld")} } 
          showAllPersons = {this.state.showAllPersons}
          />
          {personApp}
        </header>
      </div>
    );
  }
  
}

export default Radium(App);
