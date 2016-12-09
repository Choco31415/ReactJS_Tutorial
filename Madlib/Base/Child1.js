import React from 'react';

var Child1 = React.createClass({
    handleChange: function(e) {
        console.log("Name: " + e.target.value);
    },
    
    render: function() {
        return (
            <div>
                Name: <input type="text" name="name" onChange={this.handleChange} /><br />
            </div>);
    }
});

module.exports = Child1;