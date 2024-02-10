import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './screens/onboarding/Onboarding1';
import Onboarding2 from './screens/onboarding/Onboarding2';
import { Colors } from './constants/Colors';
import SignIn from './screens/SignIn';
import { useFonts } from 'expo-font';

const NativeStack = createNativeStackNavigator();

const OnBoardingStack = () => {
   return (
      <NativeStack.Navigator
         screenOptions={{
            headerShown: false,
            statusBarColor: Colors.backgroundColor,
            contentStyle: {
               backgroundColor: Colors.backgroundColor,
            },
         }}
      >
         <NativeStack.Screen name="onboarding1" component={Onboarding1} />
         <NativeStack.Screen name="onboarding2" component={Onboarding2} />
         <NativeStack.Screen name="signIn" component={SignIn} />
      </NativeStack.Navigator>
   );
};

const AuthStack = () => {
   return (
      <NativeStack.Navigator>
         <NativeStack.Screen name="signIn" component={SignIn} />
      </NativeStack.Navigator>
   );
};

export default function App() {
   const [fontsLoaded] = useFonts({
      viga: require('./assets/fonts/Viga-Regular.ttf'),
   });
   return (
      <>
         <StatusBar style="light" />
         <NavigationContainer>
            <OnBoardingStack />
            {/* <AuthStack /> */}
         </NavigationContainer>
      </>
   );
}
