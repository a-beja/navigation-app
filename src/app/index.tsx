import { useFonts } from "expo-font";
import { Text, View } from 'react-native';
import "./global.css";


const App = () => {

   const [fontsLoaded] = useFonts({
    "WorkSans-Black": require("../../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500 font-work-light">
        Welcome to Nativewind!
      </Text>
    </View>
  )
}

export default App