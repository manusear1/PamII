import React, { useState } from'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  function PamLogin(login, senha){
    if(login == "") {
      alert("Tente Novamente, campos vazios")
    }else {
      alert(`
        Login: ${login}
        Senha: ${senha}
      `)
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.mainTitle}>Tarefa PAM II</Text>
        <Text style={styles.desc}>Desenvolver uma tela de login , que ao clicar no botão enviar , exibir um alerta na tela do aparelho com o login e senha digitados !</Text>
      </View>
      <View style={styles.formBox}>
        <TextInput style={styles.input} 
          placeholder="Username"
          value={login}
          onChangeText={(e) => setLogin(e)} 
        />
        <TextInput style={styles.input} 
          placeholder="Password"
          value={senha}
          onChangeText={e => setSenha(e)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
        PamLogin(login, senha)
      }}>
        <Text style={styles.textBtn}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 3
  },
  formBox: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%'
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 12,
    textAlign: 'justify',
    padding: 4,
    marginBottom: 20
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#000',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#f0f0f0'
  }
});
