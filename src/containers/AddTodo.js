import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import {connect} from 'react-redux'
import {addTodo} from '../actions'


class AddTodo extends Component {

    state= {
        text: ''
    }

    addTodo = (text) =>{
        // update redux store
        this.props.dispatch(addTodo(text))
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{flexDirection:'row', marginHorizontal:20}}>
                <TextInput 
                            onChangeText={(text)=> this.setState({text})}
                            value={this.state.text}
                            placeholder="Learn redux" 
                            style={{
                            borderWidth:1, borderColor: '#f2f2e1',
                            backgroundColor: '#eaeaea', height: 50, flex:1, padding: 10, borderRadius:10 }} />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                    <View style={{height:50, backgroundColor: '#eaeaea', alignItems:'center', justifyContent: 'center', borderRadius:10, padding:5, marginHorizontal:5}}>
                        <Text style={{fontSize:40, color:'#ffaaaa'}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// We have to connect this to redux
// after the empty braces, we pass the component we want to connect to
export default connect() (AddTodo);
// So now we can easily dispatch actions to our store 



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});