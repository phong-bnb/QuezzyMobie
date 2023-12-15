import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ReactQuiz = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/Result.png')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView style={styles.container}>
        <Text> </Text>
        <View>
          <Text></Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ReactQuiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
