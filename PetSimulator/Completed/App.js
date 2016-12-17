import React from 'react';
import Pet from './Pet.js';
import AddPetButton from './AddPetButton.js';
import "./App.css";

var App = React.createClass({
    getInitialState: function() {
        return {
            pets: [
                {id:1},
                {id:2}
            ],
            numPets: 2
        }
    },
                
    addPet: function() {
        var numPets = this.state.numPets + 1;
        
        var pets = this.state.pets;
        pets.push({id:numPets});
                
        this.setState(
            {
                pets: pets,
                numPets: numPets
            }
        );
    },
                
    removePet: function(id) {
        var pets = this.state.pets;
        
        var index = 0;
        for (index = 0; index < pets.length; index++) {
            var pet = pets[index];
            
            if (pet["id"] === id) {
                break;
            }
        }

        pets.splice(index, 1);
                
        this.setState(
            {
                pets: pets
            }
        );
    },
    
    render: function() {
        var App = this;
        
        var PetBoxContents = this.state.pets.map(function(pet) {
            return <Pet removePet={App.removePet} key={pet.id} id={pet["id"]} />;  
        }); 
        
        return (
            <div>
                <h1>Pet Simulator</h1>
                <p>Welcome to Pet Simulator! Try to adopt them all!</p>
                
                <div className="PetBox">
                    {PetBoxContents}
                </div><br />
                <AddPetButton addPet={this.addPet}/>
            </div>
        );
    } 
});

module.exports = App;