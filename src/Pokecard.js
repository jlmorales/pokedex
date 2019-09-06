import React, {Component} from 'react'
import './Pokecard.css'
const POKEMON_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKEMON_API}${this.props.id}.png`
        return (<div className = "Pokecard">
            <h1>{this.props.name}</h1>
            <img src = {imgSrc} alt = {this.props.name}/>
            <div>Type: {this.props.type}</div>
            <div>Power: {this.props.power}</div>
        </div>)
    }
}

export default Pokecard;