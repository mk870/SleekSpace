import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IMapCoordinates, IMapRegion } from "./Types/MapTypes";
import MapMarker from "./Marker/MapMarker";
import { IVoidFunc } from "@/src/GlobalTypes/Types";
import {
  dark,
  gray,
  light,
  primary,
  pureWhite,
  white,
} from "@/src/Theme/Colors";
import { family, medium, small } from "@/src/Theme/Font";
import {
  BUTTON_SIZE_SCREEN_BREAK_POINT,
  SCREEN_BREAK_POINT,
} from "@/src/Utils/Constants";

type Props = {
  type: "get_location" | "property_locations";
  region: IMapRegion;
  tutorialText?: string;
  handleCloseMap?: IVoidFunc;
  setLocation?: () => void;
  onDragFunc?: (coords: IMapCoordinates) => void;
  handleDoneFunc?: IVoidFunc;
};

const Map: React.FC<Props> = ({
  type,
  region,
  onDragFunc,
  handleCloseMap,
  tutorialText,
  handleDoneFunc,
}) => {
  const [showGetLocationTutorial, setShowGetLocationTutorial] =
    useState<boolean>(true);
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCloseMap} style={styles.closeMap}>
        <MaterialCommunityIcons name="window-close" size={24} color="black" />
      </TouchableOpacity>
      <MapView
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
      >
        {type === "get_location" && (
          <MapMarker
            draggable={true}
            onDragFunc={onDragFunc}
            coordinates={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
        )}
      </MapView>
      {type === "get_location" && showGetLocationTutorial && (
        <View
          style={[
            styles.infoOverLay,
            { width: width > SCREEN_BREAK_POINT ? 400 : "65%" },
          ]}
        >
          <Text style={[styles.hearderTextStyle, { color: dark.background }]}>
            Tutorial
          </Text>
          <Text style={[styles.textStyle, { color: dark.background }]}>
            {tutorialText}
          </Text>
          <Pressable
            style={[
              styles.infoOverLayCloseBtn,
              { width: width > BUTTON_SIZE_SCREEN_BREAK_POINT ? 250 : "90%" },
            ]}
            onPress={() => setShowGetLocationTutorial(false)}
          >
            <Text style={[styles.textStyle, { color: primary }]}>close</Text>
          </Pressable>
        </View>
      )}
      {type === "get_location" && (
        <TouchableOpacity style={styles.btnOverLay} onPress={handleDoneFunc}>
          <Text style={[styles.textStyle, { color: white }]}>done</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  closeMap: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: light.darkGray,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  infoOverLay: {
    position: "absolute",
    backgroundColor: light.darkGray,
    alignItems: "center",
    justifyContent: "center",
    color: gray,
    borderRadius: 10,
    borderColor: gray,
    borderWidth: 1,
    top: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: "center",
  },
  infoOverLayCloseBtn: {
    backgroundColor: pureWhite,
    borderRadius: 7,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: primary,
  },
  btnOverLay: {
    position: "absolute",
    backgroundColor: primary,
    alignItems: "center",
    justifyContent: "center",
    color: gray,
    borderRadius: 10,
    borderColor: gray,
    bottom: 10,
    alignSelf: "center",
    height: 40,
    width: 190,
  },
  hearderTextStyle: {
    fontFamily: family,
    fontSize: medium,
    fontWeight: "bold",
  },
  textStyle: {
    fontFamily: family,
    fontSize: small,
  },
});
