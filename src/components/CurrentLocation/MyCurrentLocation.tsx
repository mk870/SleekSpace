import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

import { primary } from "@/src/Theme/Colors";
import Row from "../Row/Row";
import RegularText from "../RegularText/RegularText";
import { IReverseLocation, ISearchLocation } from "@/src/GlobalTypes/Types";
import MessageModal from "../Modals/MessageModal";
import ButtonSpinner from "../Spinners/ButtonSpinner";

type Props = {
  setLocation: React.Dispatch<React.SetStateAction<string | ISearchLocation>>;
};

const MyCurrentLocation: React.FC<Props> = ({ setLocation }) => {
  const [getDeviceLocation, setGetDeviceLocation] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locationDeviceError, setLocationDeviceError] =
    useState<boolean>(false);
  const [locationHttpError, setLocationHttpError] = useState<string>("");
  useEffect(() => {
    if (getDeviceLocation) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationDeviceError(true);
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setIsLoading(true);
        const reverseUrl = `https://api.locationiq.com/v1/reverse.php?key=pk.5bd5d6c9527e29a965f843c398289678&lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`;
        axios
          .get<IReverseLocation>(reverseUrl)
          .then((res) => {
            let currentLocation: ISearchLocation = {
              address: res.data.address,
              boundingbox: res.data.boundingbox,
              class: "",
              display_address: "",
              display_name: res.data.display_name,
              display_place: "",
              lat: res.data.lat,
              licence: res.data.licence,
              lon: res.data.lon,
              osm_id: res.data.osm_id,
              osm_type: res.data.osm_type,
              place_id: res.data.place_id,
              type: "",
            };
            setLocation(currentLocation);
          })
          .catch((error) => {
            console.log(error);
            if (error.response?.data?.error !== "") {
              setLocationHttpError(error.response?.data?.error);
            } else setLocationHttpError("Something went wrong");
          })
          .finally(() => {
            setIsLoading(false);
            setGetDeviceLocation(false);
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
            <RegularText>use current location</RegularText>
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
