import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { selectOrigin } from "../services/redux/slices/user-navigation.selectors";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

export const NavOptions = () => {
  const navigation = useNavigation();

  const origin = useSelector(selectOrigin);

  const viewStyles = !origin ? "opacity-20" : "";

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View className={viewStyles}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{
                uri: item.image,
              }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              size={18}
              type="antdesign"
              reverse
              name="arrowright"
              color="black"
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};
