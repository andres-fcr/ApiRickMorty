import React, { Component } from 'react'
import Cards from './Cards'

export default class List extends Component {


    constructor() {
        super();
        this.state = {
            pokemones: []
        }

    }

    async componentDidMount() {
        const url = 'https://rickandmortyapi.com/api/character/'
        const resp = await fetch(url)
        const data = await resp.json();
        const { results } = data
        console.log(results)
        this.setState({ pokemones: results })
    }

    render() {
        return (
            <div>
                {
                    this.state.pokemones.map((figura, index) => (
                        <Cards key={index} pokemon={figura}/>
                    ) )
                }
            </div>
        )
    }
}