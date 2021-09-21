import React, { Component } from 'react';
import {  View,
          StyleSheet,
          Text } from 'react-native';
import {Picker } from '@react-native-picker/picker';


export default class App extends Component{

constructor(props){
 super(props);
 this.state={
   pizza:0,
   pizzas:[
     {key:1,nome:'Strogonff', Valor:35.90},
     {key:2,nome:'Calabresa', Valor:59},
     {key:3,nome:'Quatro Queijo', Valor:37},
     {key:4,nome:'Brigadeiro', Valor:25.70},
     {key:5,nome:'Portugues', Valor:70},
   ]
 };
};


render(){

  let pizzasItem = this.state.pizzas.map( (v,k)=>{
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })
    return(

        <View style={styles.container}>
          <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={ (itemValue,itemIndex)=> {this.setState({pizza:itemValue})}}>
        {pizzasItem}
        </Picker>

          <Text style={styles.pizzas}> Você escolheu Pizza De {this.state.pizzas[this.state.pizza].nome}</Text>
          <Text style={styles.pizzas}> R$: {this.state.pizzas[this.state.pizza].Valor.toFixed(2)}</Text>
          
        </View>
    );
  }
}


const styles = StyleSheet.create({
container:{
  flex:1,
  marginTop:20,
},
  logo:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'bold'
  },
  pizzas:{
    marginTop:15,
    fontSize:25,
    textAlign:'center'
  }
});