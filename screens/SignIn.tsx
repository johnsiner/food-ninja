import {
   Image,
   ImageBackground,
   Keyboard,
   StyleSheet,
   Text,
   TextInput,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../constants/Colors';
import PressableCard from '../components/UI/PressableCard';

export default function SignIn() {
   const [emailFocused, setEmailFocused] = useState(false);
   const [passwordFocused, setPasswordFocused] = useState(false);

   const googleLoginHandler = async () => {};

   return (
      <View style={styles.root}>
         <View style={styles.patternContainer}>
            <ImageBackground
               style={styles.pattern}
               source={require('../assets/images/pattern.png')}
            >
               <LinearGradient
                  style={styles.gradient}
                  colors={['#00000000', '#0D0D0D']}
               />
            </ImageBackground>
         </View>
         <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={styles.content}>
                  <View style={styles.logoContainer}>
                     <Image source={require('../assets/images/logo.png')} />
                     <Text style={styles.logoText}>FoodNinja</Text>
                     <Text style={styles.logoSubtitle}>
                        Deliver Favorite Food
                     </Text>
                  </View>
                  <Text style={styles.title}>Login To Your Account</Text>
                  <View style={styles.form}>
                     <TextInput
                        style={[
                           styles.input,
                           emailFocused && styles.inputFocused,
                        ]}
                        placeholder="Email"
                        placeholderTextColor="hsla(100, 100%, 100%, 0.3)"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                     />
                     <TextInput
                        style={[
                           styles.input,
                           passwordFocused && styles.inputFocused,
                        ]}
                        placeholder="Password"
                        placeholderTextColor="hsla(100, 100%, 100%, 0.3)"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                     />
                     <Text style={styles.optionText}>Or continue with</Text>
                     <View style={styles.socialLogin}>
                        <PressableCard
                           onPress={googleLoginHandler}
                           sx={styles.socialLoginButton}
                        >
                           <Image
                              source={require('../assets/icons/facebook-icon.png')}
                           />
                           <Text style={styles.socialLoginButtonText}>
                              Facebook
                           </Text>
                        </PressableCard>
                        <PressableCard
                           onPress={googleLoginHandler}
                           sx={styles.socialLoginButton}
                        >
                           <Image
                              source={require('../assets/icons/google-icon.png')}
                           />
                           <Text style={styles.socialLoginButtonText}>
                              Google
                           </Text>
                        </PressableCard>
                     </View>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </KeyboardAwareScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   root: {
      flex: 1,
   },
   screen: {
      flex: 1,
   },
   patternContainer: {
      height: 370,
      position: 'absolute',
      width: '100%',
   },
   pattern: {
      flex: 1,
   },
   gradient: {
      flex: 1,
   },
   content: {
      flex: 1,
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: 60,
      marginTop: 20,
   },
   logoText: {
      color: '#53E88B',
      fontFamily: 'viga',
      fontSize: 40,
   },
   logoSubtitle: {
      color: 'white',
   },
   title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
   },
   form: {
      padding: 20,
   },
   input: {
      borderWidth: 1,
      backgroundColor: Colors.card,
      padding: 20,
      color: 'white',
      borderRadius: 15,
      marginBottom: 10,
   },
   inputFocused: {
      borderColor: '#F4F4F4',
   },
   optionText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
   },
   socialLogin: {
      flexDirection: 'row',
      gap: 20,
   },
   socialLoginButton: {
      flex: 1,
      flexDirection: 'row',
      gap: 13,
      alignItems: 'center',
      justifyContent: 'center',
   },
   socialLoginButtonText: {
      color: 'white',
   },
});
