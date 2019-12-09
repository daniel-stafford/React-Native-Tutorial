import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCount(count - 1)
        }}
      />
      <Text style={{ position: "absolute", bottom: 0 }}>
        Current Count: {count}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "5%"
  }
})

export default CounterScreen
