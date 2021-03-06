/*
A simple game where you roll a die and win or lose money.
*/

import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render: function() {
        var roll = Math.random();
    
        var message = "";
        if (roll < 0.3) {
            message = "You win $8!"
        } else {
            message = "You lose $4!"
        }
    
        return (
            <div>
                <p>You rolled: {roll}</p>
                <p>{message}</p>
            </div>
        );
    } 
});

ReactDOM.render(<App />, document.getElementById('root'));
