import React, { useState } from "react"
import { View, Button, StyleSheet, FlatList } from "react-native"

const ColorScreen = () => {
  const [colors, setColors] = useState([])
  console.log("colors", colors)

  const randomRGB = () => {
    const randomNumber = () => Math.floor(Math.random() * 256)
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
  }
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRGB()])
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen
