/*
A simple game showing off component functions and inserting JS into HTML tags.
*/

import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    getRandom: function() {
        return Math.random();
    },

    render: function() {
        var num = this.getRandom();
    
        var message = "";
        if (num < 0.3) {
            message = "You win $8!"
        } else {
            message = "You lose $4!"
        }
    
        return (
            <div>
                <p>You rolled: {num.toFixed(2)}</p>
                <p>{message}</p>
            </div>
        );
    } 
});

ReactDOM.render(<App />, document.getElementById('root'));
