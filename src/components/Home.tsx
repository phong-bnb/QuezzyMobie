import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import avt from '../assets/images/avt.png';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAppNavigation from '../hooks/useAppNavigation';

const Home = () => {
  const navigation = useAppNavigation();
  function onReactquiz() {
    navigation.navigate('ReactQuiz');
  }

  const screenWidth = Dimensions.get('window').width;
  const marginSize = 40;
  const viewWidth = screenWidth - 2 * marginSize;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, {width: viewWidth}]}>
        <View>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.textName}>Phongngo</Text>
        </View>
        <View style={styles.backgrAvt}>
          <Image source={avt} style={styles.avt} />
        </View>
      </View>
      <View style={styles.category}>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <Fontisto name="redux" size={40} />
          </View>
          <Text style={styles.text1}>Redux</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <Feather name="youtube" size={40} />
          </View>
          <Text style={styles.text1}>Youtube</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.div}
          onPress={() => {
            onReactquiz();
          }}>
          <View style={styles.div1}>
            <Icon name="react" size={45} />
          </View>
          <Text style={styles.text1}>React</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="node-js" size={45} />
          </View>
          <Text style={styles.text1}>Maths</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="css3" size={35} />
          </View>
          <Text style={styles.text1}>Css3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="vuejs" size={40} />
          </View>
          <Text style={styles.text1}>Maths</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="github" size={40} />
          </View>
          <Text style={styles.text1}>Maths</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="sass" size={40} />
          </View>
          <Text style={styles.text1}>Maths</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.div}>
          <View style={styles.div1}>
            <FontAwesomeIcon5 name="html5" size={40} />
          </View>
          <Text style={styles.text1}>Maths</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a5ae0',
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#6a5ae0',
    alignItems: 'center',
    gap: 220,
    height: 80,
  },
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 20,
    gap: 30,
  },
  div: {
    backgroundColor: '#efeefc',
    width: 155,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  div1: {
    backgroundColor: '#ffff',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#ecc7dd',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: '#6a5ae0',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textName: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgrAvt: {
    backgroundColor: '#ffff',
    width: 50,
    height: 50,
    borderRadius: 25, // Để làm tròn góc
  },
  avt: {
    width: 50,
    height: 50,
  },
});
export default Home;
