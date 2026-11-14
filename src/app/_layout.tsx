import { useFonts } from "expo-font";
import { Slot } from 'expo-router';
import "./global.css";


const RootLayout = () => {

  const [fontsLoaded, fontError] = useFonts({
    "WorkSans-Black": require("../../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
  });

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return null;
  }

  return <Slot/>;
};

export default RootLayout;