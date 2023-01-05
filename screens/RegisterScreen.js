import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password).then(authUser =>{
       authUser.user.update({
         displayName: name,
           
       });
    }).catch((error)=> alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      className="flex-1 items-center justify-center bg-white "
      behavior="padding"
    >
      <StatusBar style="light" />
      <Text className="text-center  text-2xl pb-1   font-bold text-blue-500">
        Create a Signal Account
      </Text>
      <View className="w-[300px]">
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          minLength={6}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
     
      </View>
      <Button
        containerStyle={styles.button}
        raised
        title="Register"
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
});
