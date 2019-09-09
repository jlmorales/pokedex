import React, {Component} from 'react'
import './Pokecard.css'
// const POKEMON_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKEMON_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padThree = (number) => (number <= 999? `00${number}`.slice(-3):number)

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKEMON_API}${padThree(this.props.id)}.png`
        return (<div className = "Pokecard">
            <h1 className = "Pokecard-title">{this.props.name}</h1>
            <img src = {imgSrc} alt = {this.props.name}/>
            <div className = "Pokecard-data">Type: {this.props.type}</div>
            <div className = "Pokecard-data">Power: {this.props.power}</div>
        </div>)
    }
}

export default Pokecard;