import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

import { GoogleAutoCompleteInput } from "../components/google-auto-complete.component";

import { NavOptions } from "../../../components/nav-options.component";

export const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
      </View>
      <GoogleAutoCompleteInput />
    </SafeAreaView>
  );
};
