import React, { Component } from 'react';
import {
  View,
  Text, 
  StyleSheet,
  ScrollView
} from 'react-native';

class App extends Component {
  render(){
    return(
      <View style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style= {styles.primeiracaixa}></View>
            <View style= {styles.segundacaixa}></View>
            <View style= {styles.terceiracaixa}></View>
            <View style= {styles.quartacaixa}></View>
            <View style= {styles.primeiracaixa}></View>
            <View style= {styles.segundacaixa}></View>
            <View style= {styles.terceiracaixa}></View>
            <View style= {styles.quartacaixa}></View>
          </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  primeiracaixa:{
    height:250,
    backgroundColor:'red'
  },
  segundacaixa:{
    height:250,
    backgroundColor:'green'
  },
  terceiracaixa:{
    height:250,
    backgroundColor:'yellow'
  },
  quartacaixa:{
    height:250,
    backgroundColor:'blue'
  }
});

export default App;