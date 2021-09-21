import { assertVariableDeclaration } from '@babel/types';
import React, {Component } from 'react';
import {View,
        Text,
        StyleSheet,
        Switch,
        SliderBase,
        Picker,
        TextInput,
        TouchableOpacity,
        Slider
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      nome:'',
      Sexos:[
        Sexo=0,
        {key:1,Sexo: "Feminino"},
        {key:2,Sexo: "Masculino"},
      ],
      valor:0
     };

    this.peganome=this.peganome.bind(this)
    this.pegaidade=this.pegaidade.bind(this)
      
  }

  peganome(texto){
    this.setState({nome:texto});
  }

  pegaidade(texto){
    this.setState({idade:texto});
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.form}> Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome"
          underlineColorAndroid="transparent"
          onChangeText={this.peganome}
        />

        <Text style={styles.form}>Idade:</Text>
        <TextInput
          style={styles.input} 
          placeholder="Digite sua idade"
          underlineColorAndroid="transparent"
          onChangeText={this.pegaidade}/>

        <Text style={styles.Sexo}></Text>

        <Text style={styles.form}>Sexo:</Text>
        <Picker
          selectedValue={this.state.Sexo}
          onValueChange={(ItemValue, ItemIndex) => this.setState({ Sexo: ItemValue })}>

          <Picker.Item key={1} value={"Feminino"} label="Feminino" />
          <Picker.Item key={2} value={"Masculino"} label="Masculino" />
        </Picker>


        <Text style={styles.form}>Você é estudante?</Text>

        <Switch
          value={this.state.estu}
          onValueChange={(valorSwitch) => this.setState({ estu: valorSwitch })}
          />

        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnArea}>
            <Text style={styles.formbtn}>Validação</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.form}> Defina seu limite</Text>
        <Slider
        minimumValue={0}
        maximumValue={2500}
        onValueChange={(valorSelecionado)=>this.setState({valor:valorSelecionado})}
        value={this.state.valor}/>
        <Text style={styles.form}>{this.state.valor.toFixed(2)}</Text>


<Text>Validações</Text>

<Text>Nome: {this.state.nome}</Text>
<Text>Idade: {this.state.idade}</Text>
<Text>Meu Sexo é: {this.state.Sexo}</Text>
<Text>Eu sou estudante ? {(this.state.estu) ? "SOU" : "NÃO SOU"}</Text>
      
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    marginTop:15,
    
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor: '#222',
    margin: 10,
    fontSize:20,
    padding:10,
    fontSize:13
    
  },
  form:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold'
  },
  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 25,
    alignItems:'center',
    
    
    
  },
  formbtn:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000'
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    }
    
})

export default App;