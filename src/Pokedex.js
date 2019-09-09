import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', power: 62},
        {id: 7, name: 'Squirtle', type: 'water', power: 63},
        {id: 11, name: 'Metapod', type: 'bug', power: 72},
        {id: 12, name: 'Butterfree', type: 'flying', power: 178},
        {id: 25, name: 'Pikachu', type: 'electric', power: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', power: 95},
        {id: 94, name: 'Gengar', type: 'poison', power: 225},
        {id: 133, name: 'Eevee', type: 'normal', power: 65}
      ]}
    render(){
        return (
        <div className = "Pokedex">
            <h1>Pokedex</h1>
            <p>Total Power: {this.props.power}</p>
            <p>{this.props.isWinner ? 'Winner!' : 'Loser!'}</p>
            <div className = "Pokedex-cards">
            {this.props.pokemon.map(p => (
                <Pokecard id = {p.id} name = {p.name}type = {p.type} power = {p.power}/>
            ))}
            </div>
            
        </div>
        )
    }
}

export default Pokedex;