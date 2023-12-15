import * as React from 'react';
import Logo from '../assets/images/Logo.png';
import Oval from '../assets/images/Oval.png';
import Oval2 from '../assets/images/Oval2.png';
import Oval3 from '../assets/images/Oval3.png';
import Oval4 from '../assets/images/Oval4.png';
import logo_gg from '../assets/images/logo_gg.png';
import logo_fb from '../assets/images/logo_fb.png';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import useAppNavigation from '../hooks/useAppNavigation';
GoogleSignin.configure();

const {width, height} = Dimensions.get('window');
const LoginScreen = () => {
  const navigation = useAppNavigation();

  async function onGoogleButtonPress() {
    try {
      // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // const {idToken} = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // await auth().signInWithCredential(googleCredential);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Có lỗi xảy ra khi đăng nhập:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzes</Text>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>
      <View style={styles.ovalContainer}>
        <Image source={Oval} />
      </View>
      <View style={styles.oval2Container}>
        <Image source={Oval2} />
      </View>
      <View style={styles.oval3Cotainer}>
        <Image source={Oval3} />
      </View>
      <View style={styles.oval4Cotainer}>
        <Image source={Oval4} />
      </View>
      <View style={styles.buttonLogin}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <Image source={logo_gg} style={styles.logo_ggContainer} />
          <Text style={styles.text}>Login width Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={logo_fb} style={styles.logo_ggContainer} />
          <Text style={styles.text}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textbottom}>
        Designed & responsible by ngphong.7800@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a5ae0',
  },
  logoContainer: {
    position: 'absolute',
    top: height / 2 - 50,
    left: width / 2 - 50,
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 50,
    top: height / 2 - 100,
    left: width / 2 - 55,
  },
  ovalContainer: {
    position: 'absolute',
    top: 20,
    right: 0,
  },
  oval2Container: {
    position: 'absolute',
    top: 200,
    left: 60,
  },
  oval3Cotainer: {
    position: 'absolute',
    bottom: 150,
    right: 60,
  },
  oval4Cotainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  buttonLogin: {
    position: 'absolute',
    bottom: height / 2 - 200,
    left: width / 2 - 120,
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#ffffff',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo_ggContainer: {
    width: 30,
    height: 30,
  },
  textbottom: {
    position: 'absolute',
    bottom: height / 2 - 350,
    left: width / 2 - 165,
  },
});
export default LoginScreen;
