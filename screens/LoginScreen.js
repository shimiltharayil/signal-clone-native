import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image } from "@rneui/base";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
  }, []);
  const signIn = (user) => {};
  return (
    <KeyboardAvoidingView className="flex items-center justify-center p-10 bg-white">
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/600px-Signal-Logo.svg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View className="w-[300px] pt-2">
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={style.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={style.button}
        onPress={() => navigation.navigate("Register")}
        title="Register"
        type="outline"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
});
