import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";

import { selectOrigin } from "../../../services/redux/slices/user-navigation.selectors";

export const MapComponent = () => {
  const origin = useSelector(selectOrigin);

  if (!origin) {
    console.log("Nothing!!!");
    return null;
  }
  return (
    <MapView
      className="flex-1"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />
    </MapView>
  );
};
