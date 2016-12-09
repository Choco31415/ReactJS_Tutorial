import React from 'react';

var Child1 = React.createClass({
    handleChange: function(e) {
        var name = e.target.value;
        this.props.changeWord("name", name);
    },
    
    render: function() {
        return (
            <div>
                Name: <input type="text" name="name" onChange={this.handleChange} /><br />
            </div>);
    }
});

module.exports = Child1;