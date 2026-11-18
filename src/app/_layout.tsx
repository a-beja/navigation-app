import { useFonts } from "expo-font";
import { Link, Slot, SplashScreen } from 'expo-router';
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import "./global.css";

cssInterop(Link, { className: "style" });

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {

  const [loaded, error] = useFonts({
    "WorkSans-Black": require("../../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if( loaded || error ) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if( !loaded && !error ) return null;

  return <Slot/>;
};

export default RootLayout;