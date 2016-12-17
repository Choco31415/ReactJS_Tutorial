import React from 'react';
import Eyes from './Eyes.js';

var App = React.createClass({
    getInitialState: function() {
        return ({
            showing: true
        });
    },

    toggleShowing: function() {
        this.setState({showing: !this.state.showing});
    },
    
    render: function() {
        return (this.state.showing ? <Eyes /> : null);
    } 
});

module.exports = App;