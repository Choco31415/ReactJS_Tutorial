import React from 'react';

var Child2 = React.createClass({
    handleChange: function(e) {
        var item = e.target.value;
        this.props.changeWord("item", item);
    },
    
    render: function() {
        return (
            <div>
                Item: <input type="text" name="item" onChange={this.handleChange} /><br />
            </div>);
    }
});

module.exports = Child2;