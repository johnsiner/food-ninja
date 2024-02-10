import { ReactNode } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

type Props = {
   children: ReactNode;
   onPress: () => void;
   sx?: ViewStyle;
};

export default function PressableCard({ onPress, children, sx }: Props) {
   return (
      <Pressable
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
         onPress={onPress}
      >
         <View style={[styles.card, sx && sx]}>{children}</View>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   button: {
      flex: 1,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      overflow: 'hidden',
   },
   pressed: {
      opacity: 0.7,
   },
   card: {
      backgroundColor: Colors.card,
      padding: 15,
      borderRadius: 15,
   },
});
