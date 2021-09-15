import React, { Component } from 'react';
import {
  View,
  Text, 
  StyleSheet,
  FlatList
} from 'react-native';

class App extends Component {


  constructor(props){
    super(props);
    this.state={
      feed:[
      {id:'1',nome:'Lucas',idade:28,email:'lucas@gmail.com'},
      {id:'2',nome:'Joao',idade:20,email:'joaop@gmail.com'},
      {id:'3',nome:'Antonio',idade:25,email:'antonio@gmail.com'},
      {id:'4',nome:'Henrique',idade:29,email:'henrique@gmail.com'},
      {id:'5',nome:'Afonso',idade:12,email:'Afonso@gmail.com'},
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>

        <FlatList
        data={this.state.feed}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => <Pessoa data={item}/>}/>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  areadeinformaçõesporpessoa:{
    backgroundColor:'#222',
    height:200,
    marginBottom:15
  },
  textoporpessoa:{
    color:'#fff',
    fontSize:20
  }
  
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areadeinformaçõesporpessoa}>
          <Text style={styles.textoporpessoa}>Nome: {this.props.data.nome}</Text>
          <Text style={styles.textoporpessoa}>Idade: {this.props.data.idade}</Text>
          <Text style={styles.textoporpessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
