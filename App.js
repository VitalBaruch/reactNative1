import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [inpt, setInpt] = useState('');
  return (
    <View style = {{
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <Text style= {{
        color: 'white',
        fontSize: 40
      }}>First App</Text>
      <TextInput
        style = {{
          borderWidth: 2,
          borderColor: 'white',
          color: 'white',
          width: '60%',
          textAlign: 'center'
        }}
        onChangeText={(val) => {setInpt(val)}}
        placeholder="useless placeholder"
        placeholderTextColor={'gray'}
        keyboardType="numeric"
      />
      <Button title='Press' onPress={() => {
        alert(inpt)
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}
