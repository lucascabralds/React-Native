import React, { Component } from 'react';
import {View,
        Text,
        StyleSheet} from 'react-native';

class Pessoas extends Component{
  render(){
    return(
      <View style={styles.areadeinformaçõesporpessoa}>
        <Text>Olaaaaaaaa</Text>
        <Text style={styles.textoporpessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoporpessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoporpessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areadeinformaçõesporpessoa:{
    backgroundColor: '#222',
    height: 150,
    marginBottom: 25,
    padding: 15
  },
  textoporpessoa:{
    color: '#FFF'
  }
});

export default Pessoas;