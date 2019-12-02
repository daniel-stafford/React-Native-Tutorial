import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = (
    <Text style={styles.subHeaderStyle}>My name is Daniel Stafford </Text>
  )
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      {name}
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen
