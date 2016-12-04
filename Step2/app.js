import React from 'react';

var App = React.createClass({
    getInitialState: function () {
        return { roll: -1};
    },
    
    getRoll: function() {
        return Math.floor(Math.random() * 6) + 1;
    },
    
    handleClick: function(e) {
        this.setState({roll: this.getRoll()});
    },

    render: function() {
        var roll = this.state.roll;
    
        var message = "";
        if (roll == -1) {
            message = "Click play!"
        } else if (roll < 3) {
            message = "You win $8!"
        } else {
            message = "You lose $4!";
        }
    
        return (
            <div>
                <p>You rolled: {roll}</p>
                <p>{message}</p>
                <button onClick={this.handleClick}>Play</button>
            </div>
        );
    } 
});

module.exports = App;
