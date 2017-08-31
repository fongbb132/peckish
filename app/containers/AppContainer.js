import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ReactNative} from 'react-native' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

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
        <View>
            <Text style = {{marginTop: 20}}>
                I am App Container! Recipe Count: {this.props.recipeCount}
            </Text>
            <TouchableHighlight onPress = {() => {this.addRecipe()}}>
                <Text>Add recipe</Text>
            </TouchableHighlight>
        </View>
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