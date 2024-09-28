import { Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { ISearchLocation } from "@/src/GlobalTypes/LocationIQ/LocationIQTypes";
import Map from "../../Map/Map";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import {
  harareMapRegion,
  searchPropertyLocationTutorialText,
} from "@/src/Utils/Constants";
import { IMapCoordinates } from "../../Map/Types/MapTypes";
import LocationOptions from "./Options/LocationOptions";
import { locationReverseGeoCodingHttpFunc } from "@/src/HttpServices/Mutations/LocationIQ/LocationIQHttpFuncs";
import MessageModal from "../MessageModal";
import { numberToString } from "@/src/Utils/Funcs";

type Props = {
  handleCancel: IVoidFunc;
  isModalVisible: boolean;
  setLocation: (location: string | ISearchLocation) => void;
};

const SearchLocationModal: React.FC<Props> = ({
  isModalVisible,
  handleCancel,
  setLocation,
}) => {
  const [openMap, setOpenMap] = useState<boolean>(false);
  const { location } = useAppSelector((state) => state.user.value);
  const [coordinates, setCoordinates] = useState<IMapCoordinates>({
    latitude: location?.lat ? +location.lat : harareMapRegion.latitude,
    longitude: location?.lat ? +location.lon : harareMapRegion.longitude,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [locationHttpError, setLocationHttpError] = useState<string>("");

  const theme = useAppSelector((state) => state.theme.value);

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
      handleCancel();
    },
    onError: (error: any) => {
      if (error.response?.data?.error) {
        if (error.response?.data?.error !== "") {
          setLocationHttpError(error.response?.data?.error);
        } else setLocationHttpError("Something went wrong");
      } else setLocationHttpError("Something went wrong");
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleDone = () => {
    setOpenMap(false);
    setIsLoading(true);
    reverseGeocodingMutation.mutate({
      lat: coordinates ? numberToString(coordinates?.latitude) : "",
      lon: coordinates ? numberToString(coordinates?.longitude) : "",
    });
  };

  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme === "light" ? "#000000b3" : "#333333b3",
          },
        ]}
      >
        {!openMap && (
          <LocationOptions
            setLocation={setLocation}
            setOpenMap={setOpenMap}
            handleCloseModal={handleCancel}
            isLoading={isLoading}
          />
        )}
        {openMap && (
          <Map
            onDragFunc={setCoordinates}
            handleCloseMap={() => setOpenMap(false)}
            type="get_location"
            tutorialText={searchPropertyLocationTutorialText}
            handleDoneFunc={handleDone}
            region={
              location?.lat
                ? {
                    latitude: +location.lat,
                    longitude: +location.lon,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.03,
                  }
                : harareMapRegion
            }
          />
        )}
      </View>
      <MessageModal
        message="sorry, we could not get your location data, please try again."
        header="Location data retrievial failed!"
        type="error"
        handleCancel={() => {
          setLocationHttpError("");
          handleCancel();
        }}
        isModalVisible={locationHttpError ? true : false}
      />
    </Modal>
  );
};

export default SearchLocationModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
