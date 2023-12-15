import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
const {height} = Dimensions.get('window');

const Cau1 = () => {
  const screenWidth = Dimensions.get('window').width;
  const marginSize = 10;
  const viewWidth = screenWidth - 2 * marginSize;
  return (
    <View style={styles.container}>
      <View style={[styles.container1, {width: viewWidth}]} />
    </View>
  );
};

export default Cau1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a5ae0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: '#ffff',
    flex: 1,
    top: height / 2 - 300,
    position: 'absolute',
    height: 700,
    borderRadius: 20,
    paddingLeft: 15,
    paddingTop: 10,
  },
});
