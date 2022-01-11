import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count+1);
  }
  return (
    <View style={styles.container}>
      <Text>Clicked {count} times</Text>
      <TouchableOpacity
         style={styles.button}
         onPress={() => onPress()}
         hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
         <Text>Click me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});
