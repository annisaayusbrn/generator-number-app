import { useDispatch, useSelector} from 'react-redux'
import {generateNumber} from "../store/actions/generatorAction"
import { StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
const Home = () => {
  const [min, setMin] = useState(0)
  const [ max, setMax] = useState(0)
  const dispacth = useDispatch()
  const {number} = useSelector(state=>state.generator)
  const changeMin = (num)=>{
    setMin(Number(num))
  }
  const changeMax = (num)=>{
    setMax(Number(num))
  }
  const buttonHandler = ()=>{
    if (min<max){
      dispacth(generateNumber(min,max))
    }else{
      Alert.alert("error: min harus lebih kecil dari max")
    }
  }
    return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'red'}}>Aplikasi Generator Angka</Text>
      <Text style = {{marginTop:30}}>minimum:</Text>
      <TextInput
        style= {{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
        placeholder = "minimum"
        value = {min.toString()}
        onChangeText = {num=>changeMin(num)}
        keyboardType = "number-pad"
        />
      <Text style={{marginTop:30}}>Maximum:</Text>
      <TextInput
        style= {{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
        placeholder = "maximum"
        value = {max.toString()}
        onChangeText = {num=>changeMax(num)}
        keyboardType = "number-pad"
        />
      <View style = {{marginVertical:20}}>
      <Button 
        title = "Generate"
        color = 'blue'
        onPress = {()=>buttonHandler()}
        />
      </View>
      <Text style={{fontSize: 50}}>{number}</Text>
      <StatusBar style="auto" />
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home
