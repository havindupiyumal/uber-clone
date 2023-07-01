import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";

import {
  setDestination,
  setOrigin,
} from "../../../services/redux/slices/user-navigation.slice";

import {
  selectOrigin,
  selectDestination,
} from "../../../services/redux/slices/user-navigation.selectors";

export const GoogleAutoCompleteInput = () => {
  const dispatch = useDispatch();

  const setUserOriginHandler = (origin) => {
    dispatch(setOrigin(origin));
  };

  const setUserDestinationHandler = (destination) => {
    dispatch(setDestination(destination));
  };

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <GooglePlacesAutocomplete
      style={{
        container: {
          height: "100%",
        },
        textInput: {
          fontSize: 25,
        },
      }}
      enablePoweredByContainer={false}
      returnKeyType={"search"}
      minLength={2}
      placeholder="Where From?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: GOOGLE_MAPS_API_KEY,
        language: "en", // language of the results
      }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // setting the origin of the user
        setUserOriginHandler({
          location: details?.geometry.location,
          description: data?.description,
        });

        // need to set the destination to null to reset the search
        setUserDestinationHandler(null);
      }}
      onFail={(error) => console.error(error)}
    />
  );
};
