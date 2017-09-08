import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home'

class AppContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {recipeCount: 0};
    }    

    addRecipe(){
        this.props.add_Recipe()
    }

    render() {
        return (
            <Home {...this.props}/>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch); 
}

export default connect((state) => {
    return {
        recipeCount: state.recipeCount
    }
}, mapDispatchToProps)(AppContainer); 