import React from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';





const Login = () => {

  // const obj={
  //   mobile:"8007940582"
  // }

  const [obj, setMobile] = React.useState({
    mobile:""
  });

  const pressHandler = () => {
    // if(
    //   mobile=='8007940582'
    // ){setMobile('')}
    // else{Alert.alert('Invalid')
    // setMobile('')
    // }
          axios.post('http://192.168.1.251:8000/ ',obj)
    .then(response => {
    console.log(response);
    });
 //   console.log("hiii"+mobile);

  }




  return (
    <SafeAreaView>
      <Image
        source={require('../assets/supreme-court-of-india-logo.png')}
        style={{ width: 300, height: 450 }}
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => setMobile({mobile:value})}
        //value={mobile}
        placeholder="Enter your Mobile Number"
        //keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={pressHandler}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 300,

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 20,

  },
});

export default Login;


