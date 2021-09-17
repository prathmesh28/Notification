import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default class PageTwo extends React.Component{
 
  render(){
  return(
    <SafeAreaView style={styles.backgroundStyle}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.backgroundStyle}>
      <Text>Page Two</Text>
     
    </ScrollView>
  </SafeAreaView>
  )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
