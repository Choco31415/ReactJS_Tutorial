import React from 'react';
import Child1 from './Child1.js';
import Child2 from './Child2.js';
import Sibling from './Sibling.js';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Mad Madlib Mania!</h1>
                <Child1 />
                <Child2 />
                <hr />
                <Sibling />
            </div>
        );
    } 
});

module.exports = App;