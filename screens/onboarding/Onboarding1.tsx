import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/UI/Button';

export default function Onboarding1({ navigation }) {
   const handleNext = () => {
      navigation.navigate('onboarding2');
   };
   return (
      <View style={styles.screen}>
         <Image
            style={styles.image}
            source={require('../../assets/images/onboarding1.png')}
         />
         <Text style={styles.title}>Find your Comfort Food here</Text>
         <Text style={styles.subtitle}>
            Here You Can find a chef or dish for every taste and color. Enjoy!
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
      width: '50%',
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
