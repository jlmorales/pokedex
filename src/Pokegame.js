import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
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
      ]};
    render(){
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while( hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx,1)[0];
            hand1.push(randPokemon);
        }
        let power1 = hand1.reduce((exp, pokemon) => exp + pokemon.power, 0);
        let power2 = hand2.reduce((exp, pokemon) => exp + pokemon.power, 0);
        return (
            <div>
                <Pokedex pokemon = {hand1} power = {power1} isWinner = {power1 > power2}/>
                <Pokedex pokemon = {hand2} power = {power2} isWinner = {power2 > power1}/>
            </div>
        )
    }
}
export default Pokegame;