import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputField from "../components/InputField";

export default function SignIn(){

  const [phone,setPhone] = useState("");
  const [error,setError] = useState("");
  const [isValid,setIsValid] = useState(false);

  // format số điện thoại
  const formatPhone = (text)=>{

    let number = text.replace(/[^0-9]/g,"");

    if(number.length > 10){
      number = number.slice(0,10);
    }

    if(number.length > 6){
      number = number.replace(/(\d{3})(\d{3})(\d+)/,"$1 $2 $3");
    }
    else if(number.length > 3){
      number = number.replace(/(\d{3})(\d+)/,"$1 $2");
    }

    setPhone(number);
  }

  // kiểm tra số điện thoại
  const validatePhone = (text)=>{

    let number = text.replace(/\s/g,"");

    if(number.length !== 10){
      setError("Số điện thoại không đúng định dạng, vui lòng nhập lại");
      setIsValid(false);
      return false;
    }

    if(!number.startsWith("0")){
      setError("Số điện thoại không đúng định dạng, vui lòng nhập lại");
      setIsValid(false);
      return false;
    }

    setError("");
    setIsValid(true);
    return true;

  }

  // khi nhập
  const handleChange = (text)=>{
    formatPhone(text);
    validatePhone(text);
  }

  // khi bấm tiếp tục
  const handleSubmit = ()=>{

    if(validatePhone(phone)){
      Alert.alert("Thông báo","Số điện thoại hợp lệ");
    }
    else{
      Alert.alert("Lỗi","Số điện thoại không đúng định dạng");
    }

  }

  // useEffect chạy khi mở app
  useEffect(()=>{
    console.log("SignIn loaded");
  },[])

  return(

    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.divider}/>

      <View style={styles.content}>

        <InputField
          value={phone}
          onChangeText={handleChange}
          error={error}
        />

      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isValid ? "#1A2BFF" : "#BDBDBD" }
        ]}
        disabled={!isValid}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff"
  },

  title:{
    fontSize:22,
    fontWeight:"bold",
    padding:15
  },

  divider:{
    height:1,
    backgroundColor:"#ccc"
  },

  content:{
    padding:20
  },

  button:{
    padding:15,
    borderRadius:6,
    margin:20,
    alignItems:"center",
    position:"absolute",
    bottom:20,
    left:20,
    right:20
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  }

});