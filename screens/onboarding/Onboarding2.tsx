import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/UI/Button';

export default function Onboarding2({ navigation }) {
   const handleNext = () => {
      navigation.navigate('signIn');
   };
   return (
      <View style={styles.screen}>
         <Image
            style={styles.image}
            source={require('../../assets/images/onboarding2.png')}
         />
         <Text style={styles.title}>
            Food Ninja is Where Your Comfort Food Lives
         </Text>
         <Text style={styles.subtitle}>
            Enjoy a fast and smooth food delivery at your doorstep
         </Text>
         <View style={styles.buttonContainer}>
            <Button onPress={handleNext}>Next</Button>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      paddingTop: 40,
      alignItems: 'center',
   },
   image: {
      width: '100%',
      height: '50%',
      objectFit: 'contain',
      marginBottom: 30,
   },
   texts: {
      alignItems: 'center',
   },
   title: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      width: '70%',
      textAlign: 'center',
      marginBottom: 20,
      lineHeight: 30,
   },
   subtitle: {
      color: 'white',
      fontSize: 12,
      width: '70%',
      textAlign: 'center',
   },
   buttonContainer: {
      width: 160,
      marginTop: 40,
      marginHorizontal: 'auto',
   },
});
