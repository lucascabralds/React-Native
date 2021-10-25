import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated } from 'react-native';

export default class App extends Component{

constructor(props){
  super(props);
  this.state={
      LarAnimada:new Animated.Value(150),
      AltAnimada:new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0)

  };

    Animated.loop(

      Animated.sequence([
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue:200,
            duration:700
          }
        ),
        Animated.timing(
          this.state.LarAnimada,
          {
            toValue:150,
            duration:700
          }
        )
      ])

    ).start();


  }
  render(){

  return (
    <View style={styles.container}>

        <Animated.View style={ {width:this.state.LarAnimada,
                               height:this.state.AltAnimada,
                               backgroundColor:'#4169E1',
                               borderRadius:25,
                               justifyContent:'center'}}>

          <Text style={{  color:'#FFFF',
                          fontSize:20,
                          textAlign:'center'}}> Carregando...</Text>

        </Animated.View>

    </View>
  );
}
}


const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
});