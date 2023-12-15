import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAppNavigation from '../../hooks/useAppNavigation';

const ReactQuiz = () => {
  const navigation = useAppNavigation();
  function onReactquiz() {
    navigation.navigate('Cau1');
  }
  const screenWidth = Dimensions.get('window').width;
  const marginSize = 10;
  const viewWidth = screenWidth - 2 * marginSize;
  return (
    <ImageBackground
      source={require('../../assets/images/Result.png')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView style={[styles.container, {width: viewWidth}]}>
        <View>
          <Text>PROMPT</Text>
          <Text style={styles.basic}>Basic trivia quiz.</Text>
          <View>
            <View style={styles.div1}>
              <View style={[styles.div1_1, {marginRight: 10}]}>
                <Icon name="exclamation-thick" />
                <Text style={styles.textofdiv}>10 questions</Text>
              </View>
              <View style={styles.div1_2}>
                <Icon name="exclamation-thick" />
                <Text style={styles.textofdiv}>+100 points</Text>
              </View>
            </View>
          </View>
          <Text style={styles.textDes}>Description</Text>
          <Text style={styles.text}>
            Any time is a good time for a quiz and even better if that happens
            to be a ReactJS themed quiz!
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                onReactquiz();
              }}>
              Play...
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ReactQuiz;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    height: 300,
    position: 'absolute',
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 10,
  },
  basic: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: '#000000',
    paddingRight: 30,
    paddingLeft: 10,
    fontSize: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div1: {
    flexDirection: 'row',
    backgroundColor: '#e1def9',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    marginTop: 10,
    marginHorizontal: 35,
    height: 50,
    borderRadius: 10,
  },
  div1_1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  div1_2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  textofdiv: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textDes: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#a76ae4',
    width: 300,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
