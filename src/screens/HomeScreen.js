import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components")
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("List")
        }}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image")
        }}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Counter")
        }}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Color")
        }}
        title="Go to Color Demo"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 40
  }
})

export default HomeScreen
