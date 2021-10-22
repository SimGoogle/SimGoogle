import React from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';





const Login = () => {

  // const obj={
  //   mobile:"1111111111"
  // }
  //111..=mobile no.

  const [obj, setMobile] = React.useState({
    mobile:""
  });

  const pressHandler = () => {
    // if(
    //   mobile=='1111111111'
    //111..=mobile no.

    // ){setMobile('')}
    // else{Alert.alert('Invalid')
    // setMobile('')
    // }
          axios.post('http://localhost:8000/ ',obj)
    .then(response => {
    console.log(response);
    });
 //   console.log("hiii"+mobile);

  }




  return (
    <SafeAreaView>
      <Image
        source={require('https://www.mydesijob.com/wp-content/uploads/2019/09/Supreme-Court.png')}
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


