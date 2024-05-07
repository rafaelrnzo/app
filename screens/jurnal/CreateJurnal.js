import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function CreateJurnal({ navigation }) {
  return (
    <SafeAreaView className="h-full py-10 bg-white px-4 ">
      <TouchableOpacity onPress={() => {
        navigation.navigate('MainJurnal')
      }}>
        <Text> Go back </Text>
      </TouchableOpacity>
      <View className="">
        <Text className="text-md py-2">Password</Text>
        <TextInput
          // value={password}
          className={`${textInputStyleLogin} border`}
          // onChangeText={(text) => setPassword(text)}
          placeholder='Password'
        />
      </View>
    </SafeAreaView>
  )
}

const textInputStyleLogin =
  "tracking-widest border p-3 py-2 text-base border-slate-300 rounded-lg w-full text-base ";


const styles = StyleSheet.create({})