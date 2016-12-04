*
A simple game showing off component functions and inserting JS into HTML tags.
*/

import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    getRoll: function() {
        return Math.floor(Math.random() * 6);
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
