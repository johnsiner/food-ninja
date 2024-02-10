import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
   children: ReactNode;
   onPress: () => void;
};

export default function Button({ children, onPress }: Props) {
   return (
      <Pressable
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
         onPress={onPress}
      >
         <LinearGradient
            style={styles.gradient}
            colors={['#53E88B', '#15BE77']}
         >
            <Text style={styles.buttonText}>{children}</Text>
         </LinearGradient>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   button: {
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      overflow: 'hidden',
   },
   gradient: {
      borderRadius: 15,
      paddingVertical: 16,
      paddingHorizontal: 12,
   },
   pressed: {
      opacity: 0.7,
   },
   buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
   },
});
