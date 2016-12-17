import React from 'react';

var RemovePetButton = React.createClass({
    handleClick: function(e) {
        this.props.removePet();
    },
    
    render: function() {
        return (
            <button onClick={this.handleClick}>
                Put up for adoption.
            </button>
        );
    }
});

module.exports = RemovePetButton;