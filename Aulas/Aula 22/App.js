import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,} from 'react-native';
import Conversor from './src/Conversor';


  class App extends Component{
    render(){
      return(
        <View style={style.container}>
          <Conversor moedaA="USD" moedaB="BRL"/>
        </View>
      );
    }
  }

  const style=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  export default App;