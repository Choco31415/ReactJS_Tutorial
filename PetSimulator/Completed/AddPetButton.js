import React from 'react';

var AddPetButton = new React.createClass({
    handleClick: function(e) {
        this.props.addPet();
    },
    
    render: function() {
        return (
            <button onClick={this.handleClick}>
                Adopt a pet!
            </button>
        );
    }
});

module.exports = AddPetButton;