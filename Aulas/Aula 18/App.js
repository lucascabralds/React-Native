import React, {Component} from 'react';
import {  View,
          Text,
          TextInput,
          TouchableOpacity,
          StyleSheet,
          Keyboard,   
          Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component{

constructor(props){
  super(props);
  this.state={
    nome:'',
    input:'',
   };
   this.gravaNome=this.gravaNome.bind(this);
}

//Component DidMount - QUando o componente é montado em tela
 async componentDidMount(){
  await AsyncStorage.getItem('nome').then((value)=>{
    this.setState({nome:value})
   })
}

//ComponentDidUpdate - Toda vez que um state é atualizado fazer algo..
async componentDidUpdate(_,prevState){
  const nome= this.state.nome;
  if (prevState !== nome){
    await AsyncStorage.setItem('nome',nome);
  }
}

gravaNome(){
  this.setState({
    nome:this.state.input});
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
}

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.viewInput}>
                  <TextInput
                              style={styles.input}
                              value={this.state.input}
                              onChangeText={(text)=> this.setState({input: text})}
                              underlineColorAndroid='transparent'/>

                  <TouchableOpacity onPress	={this.gravaNome}>
                    <Text style={styles.botao}>
                      +
                    </Text>
                  </TouchableOpacity>

                </View>

              <Text style={styles.nome}>{this.state.nome}</Text>

            </View>
        );
    }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    alignItems:'center'
  },
  viewInput:{
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    width:350,
    height:40,
    borderColor:'#000',
    borderWidth:1,
    padding:10
  },
  botao:{
    backgroundColor:'#222',
    color:'#fff',
    height:40,
    paddingLeft:10,
    padding:10,
    marginLeft:4,
  },
});
