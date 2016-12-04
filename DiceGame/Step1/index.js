/*
A simple game where you roll a die and win or lose money.
*/

import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    getRoll: function() {
        return Math.floor(Math.random() * 6) + 1;
    },

    render: function() {
        var roll = this.getRoll();
    
        var message = "";
        if (roll < 3) {
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
