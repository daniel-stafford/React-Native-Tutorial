import React from "react"
import { Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 15 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 44 },
    { name: "Friend #4", age: 99 },
    { name: "Friend #5", age: 77 },
    { name: "Friend #6", age: 11 }
  ]
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})

export default ListScreen
