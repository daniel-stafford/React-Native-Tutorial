import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Whats up!!</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
