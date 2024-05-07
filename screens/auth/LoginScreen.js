import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { Component, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../utils/api';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async () => {
    try {
      if (name.length === 0) {
        alert("Username harus diisi");
        return;
      }
      if (password.length === 0) {
        alert("Password harus diisi");
        return;
      }

      // setBtnLoading(true);

      const response = await axios.post(`${api}/auth/login`, {
        username: name,
        password: password,
      }
      );

      if (response.data) {
        navigation.navigate("MainJurnal");
        console.log(response.data);
        // setCredentialsStore(response.data);
        // storage.set("credentials", JSON.stringify(response.data));  
        // setBtnLoading(false);
      } else {
        alert("Authentication failed: " + response.data.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      // setBtnLoading(false);
    }
  }


  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex">
        <View className="text-2xl w-full p-3 border-b border-slate-300 flex flex-row justify-between items-center" >
          <Text className="text-base font-bold">Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text className="text-md text-blue-600 font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
        <View className="p-3 pt-6">
          <View>
            <Text className="text-md py-2">Username</Text>
            <TextInput
              value={name}
              className={`${textInputStyleLogin}`}
              onChangeText={(text) => setName(text)}
              placeholder='Username'
            />
          </View>
          <View className="">
            <Text className="text-md py-2">Password</Text>
            <TextInput
              value={password}
              className={`${textInputStyleLogin} border`}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
            />
          </View>
          <View className="mt-4">
            <TouchableOpacity
              onPress={loginUser}
              android_ripple={{ color: "whitesmoke" }}
              className="bg-blue-600 w-full p-2 text-center flex items-center rounded-md"
            >
              {btnLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text className="text-lg text-white">Continue</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const textInputStyleLogin =
  "tracking-widest border p-3 py-2 text-base border-slate-300 rounded-lg w-full text-base ";

export default LoginScreen;
const styles = StyleSheet.create({})