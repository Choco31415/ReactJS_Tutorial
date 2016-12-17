import React from 'react';
import "./App.css";

var App = React.createClass({
    render: function() {        
        return (
            <center className="App">
                <h1>Llamas rule!</h1>
                <p>They're soft, cuddly, and wuddly. ❤️</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Llama_near_Pululahua_volcano.jpg/548px-Llama_near_Pululahua_volcano.jpg" width="300" />
            </center>
        );
    } 
});

module.exports = App;