import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients){
    return (dispatch, getState) => {
        // console.log(getState);
        const params = [
            `ingredients=${encodeURIComponent(ingredients)}`,
            'p=1'
        ].join('&')
        
        return Api.get(`/recipes/findByIngredients?${params}`).then(resp=>{
            dispatch(setSearchRecipes({recipes: resp}));
        }).catch((ex)=>{
            console.log(ex);
        });
    }
}

export function setSearchRecipes({ recipes }){
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes
    }
}

export function add_Recipe(){
    return {
        type:types.ADD_RECIPE,         
    }
}