import React from 'react';

var Sibling = React.createClass({
    render: function() {
        return (
            <p>
                One day, {this.props.name} was walking on the sidewalk when {this.props.name} decided to eat some {this.props.item}.
            </p>);
    }
});

module.exports = Sibling;