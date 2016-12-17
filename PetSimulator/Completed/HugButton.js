import React from 'react';

var HugButton = React.createClass({
    handleClick: function(e) {
        this.props.getHugged();
    },
    
    render: function() {
        return (
            <button onClick={this.handleClick}>
                Hug me!
            </button>
        );
    }
});

module.exports = HugButton;