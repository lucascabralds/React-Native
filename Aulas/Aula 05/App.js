import React, {Componet} from 'react';
import { ViewBase, Text } from 'react-native';

class App extends Componet{
    render(){
        return(
            <View style={{flex:1,
                flexDirection:"column",
                alignItems: "flex-end",
                justifyContent: "center"}}>

                <View style = {{ width: 50, height: 50, backgroundColor: "green"}}></View>

                <View style = {{ width: 50, height: 50, backgroundColor: "red"}}></View>

                <View style = {{ width: 50, height: 50, backgroundColor: "yellow"}}></View>


                </View>
        )
    }
}