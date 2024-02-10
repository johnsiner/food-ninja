import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';

interface StoreProps {
   onBoarded: boolean;
   setOnBoarded: (value: true) => void;
}

const useStore = create<StoreProps>()((set) => ({
   onBoarded: false,
   setOnBoarded: async (onBoarded) => {
      AsyncStorage.setItem('appLaunched', 'true');
      set(() => ({ onBoarded }));
   },
}));

export default useStore;
