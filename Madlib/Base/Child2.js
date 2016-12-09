import React from 'react';

var Child2 = React.createClass({
    handleChange: function(e) {
        console.log("Item: " + e.target.value);
    },
    
    render: function() {
        return (
            <div>
                Item: <input type="text" name="item" onChange={this.handleChange} /><br />
            </div>);
    }
});

module.exports = Child2;