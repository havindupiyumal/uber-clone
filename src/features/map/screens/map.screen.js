import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { MapComponent } from "../components/map.component";

export const MapScreen = () => {
  return (
    <>
      <View className="h-1/2">
        <MapComponent />
      </View>
      <View className="h-1/2"></View>
    </>
  );
};
