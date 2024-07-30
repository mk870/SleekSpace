import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";

import { primary } from "@/src/Theme/Colors";
import Row from "../Row/Row";
import { ISearchLocation } from "@/src/GlobalTypes/Types";
import MessageModal from "../Modals/MessageModal";
import ButtonSpinner from "../Spinners/ButtonSpinner";
import { locationReverseGeoCodingHttpFunc } from "@/src/HttpServices/Mutations/LocationHttpFunctions";
import { numberToString } from "@/src/Utils/Funcs";
import ThemedText from "../ThemedText/ThemedText";

type Props = {
  setLocation: React.Dispatch<React.SetStateAction<string | ISearchLocation>>;
};

const MyCurrentLocation: React.FC<Props> = ({ setLocation }) => {
  const [getDeviceLocation, setGetDeviceLocation] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locationDeviceError, setLocationDeviceError] =
    useState<boolean>(false);
  const [locationHttpError, setLocationHttpError] = useState<string>("");

  const reverseGeocodingMutation = useMutation({
    mutationFn: locationReverseGeoCodingHttpFunc,
    onSuccess: (res) => {
      let currentLocation: ISearchLocation = {
        address: res.data.response.address,
        boundingbox: res.data.response.boundingbox,
        class: "",
        display_address: "",
        display_name: res.data.response.display_name,
        display_place: res.data.response.display_name.split(",")[0],
        lat: res.data.response.lat,
        licence: res.data.response.licence,
        lon: res.data.response.lon,
        osm_id: res.data.response.osm_id,
        osm_type: res.data.response.osm_type,
        place_id: res.data.response.place_id,
        type: "",
      };
      setLocation(currentLocation);
    },
    onError: (error: any) => {
      console.log(error);
      if (error.response?.data?.error !== "") {
        setLocationHttpError(error.response?.data?.error);
      } else setLocationHttpError("Something went wrong");
    },
    onSettled: () => {
      setIsLoading(false);
      setGetDeviceLocation(false);
    },
  });

  useEffect(() => {
    if (getDeviceLocation) {
      setIsLoading(true);
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationDeviceError(true);
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        reverseGeocodingMutation.mutate({
          lat: numberToString(location.coords.latitude),
          lon: numberToString(location.coords.longitude),
        });
      })();
    }
  }, [getDeviceLocation]);

  const handleCancelDeviceError = () => {
    setGetDeviceLocation(false);
    setLocationDeviceError(false);
  };

  const handleCancelHttpError = () => {
    setGetDeviceLocation(false);
    setLocationHttpError("");
  };
  
  return (
    <View>
      <TouchableOpacity
        onPress={() => setGetDeviceLocation(true)}
        style={{ paddingLeft: isLoading ? 10 : 0 }}
      >
        {isLoading ? (
          <ButtonSpinner backGroundColor={primary} />
        ) : (
          <Row style={styles.row}>
            <FontAwesome name="location-arrow" size={24} color={primary} />
            <ThemedText type="regular">use current location</ThemedText>
          </Row>
        )}
      </TouchableOpacity>
      <MessageModal
        message="sorry, we do not have permission to get your device location, please allow Sleek Space to have access to your location on your device settings."
        header="Permission Denied!"
        type="error"
        handleCancel={handleCancelDeviceError}
        isModalVisible={locationDeviceError}
      />
      <MessageModal
        message="sorry, we could not get your location data, please try again."
        header="Location data retrievial failed!"
        type="error"
        handleCancel={handleCancelHttpError}
        isModalVisible={locationHttpError ? true : false}
      />
    </View>
  );
};

export default MyCurrentLocation;

const styles = StyleSheet.create({
  container: {},
  row: {
    gap: 5,
  },
});
