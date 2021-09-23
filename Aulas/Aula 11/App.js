import React, { Component } from 'react';
import {
  View,
  Text, 
  StyleSheet,
  FlatList
} from 'react-native';

import Pessoas from './src/Pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Lucas', idade: 28, email: 'lucas@gmail.com' },
        { id: '2', nome: 'Joao', idade: 20, email: 'joaop@gmail.com' },
        { id: '3', nome: 'Antonio', idade: 25, email: 'antonio@gmail.com' },
        { id: '4', nome: 'Henrique', idade: 29, email: 'henrique@gmail.com' },
        { id: '5', nome: 'Afonso', idade: 12, email: 'Afonso@gmail.com' },
        { id: '7', nome: 'Jose', idade: 33, email: 'Jose@thiago.com' },
        { id: '8', nome: 'Carlos', idade: 20, email: 'Carlos@lucas.com' },
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}> 

      <FlatList
      data={this.state.lista}
      keyExtractor={(item)=> item.id}
      renderItem={ ({item}) => <Pessoas data={item} /> }
      />

      </View>    
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;


