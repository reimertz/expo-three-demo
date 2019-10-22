import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native'

import ThreeD from './ThreeD'

export const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.threeD}>
          <Text style={styles.heading}>Three Dimensions</Text>
          <ThreeD />
          <Text style={styles.text}>@reimertz</Text>
        </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  threeD: {
    ...StyleSheet.absoluteFill, backgroundColor: 'black',  justifyContent: 'center', alignItems: 'center', flex: 1
  },
  heading: {
    fontWeight: '900', 
    color: 'white', 
    textAlign: 'center',
    marginBottom: -80, 
    fontSize: 50, 
    fontWeight: '900'
  },
  text: {
    fontWeight: '900', 
    color: 'white', 
    textAlign: 'center',
    marginTop: -100, 
    fontSize: 40, 
    fontWeight: '400'
  }
})