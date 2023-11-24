import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToTask from './src/components/totask';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {

  return (
      <View style={styles.container}>

      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}> Sherree Swen Nacaitona Todo Notes</Text>
        <ToTask />

      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af97c2',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    backgroundColor: '#cfa8f0',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    
  },
});
