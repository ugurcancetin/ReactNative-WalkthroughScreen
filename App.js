import React, { useEffect, useState } from "react";
import { AppearanceProvider, Appearance } from "react-native-appearance";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";


export default function App() {

  return (
    <AppearanceProvider>
      <WalkthroughScreen />
    </AppearanceProvider>
  );
}
