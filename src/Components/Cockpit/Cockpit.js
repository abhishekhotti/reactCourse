import React from 'react';
import Radium from 'radium';

const Cockpit = (props) => {
    const buttonStyle = {
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
        ":hover":{
          backgroundColor: "white",
          color: "black"
        }
    };
    const buttonStyle2 = JSON.parse(JSON.stringify(buttonStyle))
    let showWorld = null;
    let worldString = "Show \"Hello World\"";
    if(props.showWorld === true){
      worldString = "Delete \"Hello World\"";
      showWorld = "Hello World";
    }
    if (props.showAllPersons === true)
    {
        buttonStyle.backgroundColor = "powderblue";
        buttonStyle.color = "darkgreen";
        buttonStyle[":hover"].backgroundColor = "darkgreen";
        buttonStyle[":hover"].color = "powderblue";
    }

    return (
        <div>
            <button key = {"4321"} onClick={props.toggleWorldVisibilty} style={buttonStyle2}> {worldString} </button>
            <p>{showWorld}</p>
            <button key = {"1234"} onClick={props.togglePersonVisibilty} style={buttonStyle}>Toggle Persons</button>
        </div>

    );
}

export default Radium(Cockpit);