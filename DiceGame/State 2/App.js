import React from 'react';

var App = React.createClass({
    getInitialState: function() {
        return {
            roll: -1,
            money: 12,
        };
    },
    
    getRoll: function() {
        return Math.floor(Math.random() * 6) + 1;
    },
    
    handleClick: function(e) {
        var roll = this.getRoll();
        var money = this.state.money;
        
        if (roll < 3) {
            money += 8;
        } else {
            money -= 4;
        }
        
        this.setState({
            roll: roll,
            money: money,
        });
    },

    render: function() {
		var roll = this.state.roll;

        var message = "";
        if (roll < 3) {
            message = "You win $8!";
        } else {
            message = "You lose $4!";
        }
    
        return (
            <div>
                <p>You rolled: {roll}</p>
                <p>{message}</p>
                <p>Money left: ${this.state.money}</p>
                <button onClick={this.handleClick}>Play</button>
            </div>
        );
    } 
});

module.exports = App;
