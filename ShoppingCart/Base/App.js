import React from 'react';

var Item = React.createClass({
    render: function() {
        return (
            <div>
                Item: {this.props.name}<br />
                Quantity: 1
            </div>
        );
    } 
});

var App = React.createClass({
    getInitialState: function() {
        return ({
            cart: [
                "Pencil",
                "Pen",
                "Apple",
                "Laptop"
            ]
        });
    },
    
    render: function() {                                               
        var CartContents = [];
        for (var i = 0; i < this.state.cart.length; i++) {
            CartContents.push(<Item name={this.state.cart[i]} />);
        }
        
        return (<div>
                    {CartContents}
                </div>);
    } 
});

module.exports = App;