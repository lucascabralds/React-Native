import React, {useState,useEffect,useMemo,useRef} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        TextInput} from 'react-native';

export default function App(){
  const [nome,setNome] = useState ('');
  const [input,setInput] = useState ('');
  const nomeInput = useRef(null);


  //ComponentDidMount
  useEffect(()=>{

    async function getStorage(){
        const nomeStorage = await AsyncStorage.getItem('nomes');
        if (nomeStorage !== null){
          setNome(nomeStorage)
        }
    }

    getStorage();

  },[]);

  useEffect (()=>{

    async function saveStorage(){
      await useAsyncStorage.setItem('nomes',nome);
    }

    saveStorage();

  },[nome]);

  function alteraNome(){
    setNome(input);
    setInput('');
    
  }

  function novoNome(){
    nomeInput.current.focus(); 
  }

  const letrasNome=useMemo(()=>nome.length,[nome]);
  

  return(
      <View styles={styles.container}>

        <TextInput  placeholder='Insira seu nome...'
                    value={input}
                    onChangeText={(texto)=> setInput(texto)} 
                    ref={nomeInput}/>

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>

        <Text style={styles.btnText}> Alternar Nome </Text>

      </TouchableOpacity>

        <Text style={styles.texto}> {nome}</Text>
        <Text style={styles.texto}> Tem {letrasNome} letras.</Text>

        <TouchableOpacity onPress={novoNome}>

          <Text onPress={novoNome}>Novo Nome</Text>

        </TouchableOpacity>

      </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginTop:15
  },
  texto:{
    color:'#000',
    fontSize:35,
  },
    btn:{
      backgroundColor:'#222',
    },
    btnText:{
      color:'#fff'
    }

});