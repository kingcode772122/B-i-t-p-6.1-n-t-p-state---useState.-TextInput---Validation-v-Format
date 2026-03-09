import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputField({ value, onChangeText, error }) {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />

      {error !== "" && <Text style={styles.error}>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    marginTop:20
  },

  label:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  desc:{
    fontSize:14,
    color:"#666",
    marginBottom:20
  },

  input:{
    borderBottomWidth:1,
    borderBottomColor:"#ccc",
    paddingVertical:8,
    fontSize:16
  },

  error:{
    color:"red",
    marginTop:5
  }

});