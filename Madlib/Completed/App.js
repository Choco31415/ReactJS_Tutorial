import React from 'react';
import Child1 from './Child1.js';
import Child2 from './Child2.js';
import Sibling from './Sibling.js';

var App = React.createClass({
    getInitialState: function () {
        return {
            name: "",
            item: ""
        };
    },
    
    changeWord: function(key, value) {
        var state = {};
        state[key] = value;
        this.setState(state);
    },
    
    render: function() {        
        return (
            <div>
                <h1>Mad Madlib Mania!</h1>
                <Child1 changeWord={this.changeWord} />
                <Child2 changeWord={this.changeWord} />
                <hr />
                <Sibling {...this.state} />
            </div>
        );
    } 
});

module.exports = App;