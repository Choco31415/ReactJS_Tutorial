import React from 'react';
import HugButton from './HugButton.js';
import RemovePetButton from './RemovePetButton.js';
import "./PetStyles.css";

var Pet = React.createClass({
    propTypes: {
        removePet: React.PropTypes.func.isRequired,
        id: React.PropTypes.number.isRequired
    },
    
    getInitialState: function() {
        var rand = Math.random();
        if (rand < 0.5) {
            var type = "Cat";
        } else if (rand < 0.9) {
            type = "Dog";
        } else {
            type = "Shark";
        }
        
        return {
            type: type,
            hugs: 0
        };
    },
    
    noise: function() {
        if (this.state.type === "Cat") {
            alert("Meow!");
        } else if (this.state.type === "Dog") {
            alert("Woof!");
        } else {
            alert("mrwrawww");
        }
    },
    
    componentWillMount: function() {
        this.noise();
    },
    
    componentWillUnmount: function() {
        this.noise();
    },
    
    removePet: function() {        
        this.props.removePet(this.props.id);
    },
    
    getHugged: function() {        
        this.setState({
            hugs: this.state.hugs + 1
        });
    },
    
    render: function() {
        if (this.state.type === "Cat") {
            var iconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/320px-Red_Kitten_01.jpg";
        } else if (this.state.type === "Dog") {
            iconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/St._Bernard_puppy.jpg/320px-St._Bernard_puppy.jpg";       
        } else {
            iconURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Male_whale_shark_at_Georgia_Aquarium.jpg/320px-Male_whale_shark_at_Georgia_Aquarium.jpg";
        }
        var iconAlt = "A " + this.state.type.toLowerCase() + ".";
        
        return (
            <div className="Pet">
                <table>
                    <tbody>
                        <tr>
                            <td className="Icon">
                                <img src={iconURL} alt={iconAlt} />
                            </td>
                            <td className="Hugs">
                                <HugButton getHugged={this.getHugged} />
                                <p>Hug count: {this.state.hugs}</p>
                            </td>
                            <td className="Adoption">
                                <RemovePetButton removePet={this.removePet}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Pet;