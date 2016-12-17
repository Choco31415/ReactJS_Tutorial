import React from 'react';
import Eyes from './Eyes.js';

var App = React.createClass({
    getInitialState: function() {
        return ({
            showing: true
        });
    },
    
    componentWillMount: function() {
        this.toggleShowing();
    },
    
    toggleShowing: function() {
        this.setState({showing: !this.state.showing});
        
        setTimeout(this.toggleShowing, 4000);
    },
    
    render: function() {
        return (this.state.showing ? <Eyes /> : null);
    } 
});

module.exports = App;