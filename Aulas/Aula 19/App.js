import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import {Platform,
        StyleSheet,
        TextAsyncStorage,
        View,
        Button,
        Modal,
        Text} from 'react-native';

export default class App extends Component{

  constructor (props){
  super(props);
  this.state={
    modalVisible:false,
   };

  this.entrar=this.entrar.bind(this);
  this.sair=this.sair.bind(this);
  }


  sair(visible){
    this.setState({modalVisible:visible})
  }
  entrar(){

    this.setState({modalVisible:true});
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title = "Entrar" onPress={this.entrar} />
        

        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor:'#292929',flex:1}}>
            <Text style={{color:'#FFF', fontSize:28}}> Seja bem-Vindo</Text>
            <Button title="Sair" onPress={() => this.sair(false)}></Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DDD',
  },
});