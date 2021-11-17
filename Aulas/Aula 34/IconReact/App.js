import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'

  export default function App(){
    return(
      <View style={styles.container}>
        <Text>Sujeito Programador</Text>
        <FontAwesome name="home"
                     size={25}
                     color="#11118c"/>

        <FontAwesome  name="user"
                      size={25}
                      color="#54a300"/>

        <Feather name="gift"
                 size={25}
                 color="#7665ff"/>

        <TouchableOpacity style={styles.btnYoutube}>
          <FontAwesome name="youtube"
                       size={25}
                       color="#FFF"/>

          <Text style={styles.btnText}>Acessar Canal</Text>
        </TouchableOpacity>


      </View>
    )
  }

  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center' 
    },
    btnYoutube:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      backgroundColor:'#FF0000',
      borderRadius:25
    },
    btnText:{
      padding:10,
      color:'#FFF'
    }
  });