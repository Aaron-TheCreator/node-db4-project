import React, { Component }  from 'react';
import axios from 'axios';

export default class Home extends Component {
    // initialize state as empty array
    state = {
        recipes: []
    };

    // CDM lifecycle fetches data from http://localhost:5000/api/recipes
    // set returned recipes to thisstate.recipes

    componentDidMount() {
        axios.get('http://localhost:5000/api/recipes')
            .then( (res) => {
                console.log(res);

            })
            .catch( (err) => {
                console.error(err);
            })
    };

    render() {
        return (
            <div className="recipes-home">
                <h3>View Our Recipes!</h3>
            </div>
        )
    }


}


