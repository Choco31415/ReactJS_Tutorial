import React from 'react';
import "./Eyes.css";

var Eyes = React.createClass({
    componentWillMount: function() {
        alert("Peekaboo!");
    },
    
    componentDidMount: function() {
        alert("Here I am!");
    },
    
    render: function() {
        alert("Rendering!");
        
        return <div>👀</div>;
    }
});

module.exports = Eyes;