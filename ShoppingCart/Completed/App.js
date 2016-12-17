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
        var CartContents = this.state.cart.map(name => <Item name={name} key={name} />);
        
        return (<div>
                    {CartContents}
                </div>);
    } 
});

module.exports = App;