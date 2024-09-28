import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Ionicons } from "@expo/vector-icons";

import {
  pureWhite,
  dark,
  primary,
  gray,
  white,
  light,
} from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import Row from "@/src/Components/Row/Row";
import MyCurrentLocation from "@/src/Components/CurrentLocation/MyCurrentLocation";
import { ISearchLocation } from "@/src/GlobalTypes/LocationIQ/LocationIQTypes";
import { IVoidFunc } from "@/src/GlobalTypes/Types";
import ButtonSpinner from "@/src/Components/Spinners/ButtonSpinner";

type Props = {
  isLoading: boolean;
  setLocation: (location: string | ISearchLocation) => void;
  setOpenMap: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal: IVoidFunc;
};

const LocationOptions: React.FC<Props> = ({
  isLoading,
  setLocation,
  setOpenMap,
  handleCloseModal,
}) => {
  const { width } = useWindowDimensions();
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <View
      style={[
        styles.container,
        {
          width: width > 500 ? 280 : 250,
          backgroundColor: theme === "light" ? pureWhite : dark.background,
        },
      ]}
    >
      <View style={styles.iconContainer}>
        <FontAwesome6 name="map-location-dot" size={30} color={white} />
      </View>
      <ThemedText type="header">Location Options</ThemedText>
      <Row style={styles.row}>
        <MyCurrentLocation
          setLocation={setLocation}
          isInModal
          closeModal={handleCloseModal}
        />
        <TouchableOpacity
          onPress={() => setOpenMap(true)}
          style={[
            styles.mediaOption,
            {
              backgroundColor:
                theme === "light" ? light.darkGray : dark.darkGray,
            },
          ]}
        >
          {isLoading ? (
            <ButtonSpinner backGroundColor={primary} />
          ) : (
            <>
              <Ionicons name="map" size={27} color={primary} />
              <Text style={styles.mediaOptionText}>map</Text>
            </>
          )}
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default LocationOptions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderTopWidth: 3,
    borderTopColor: primary,
    paddingBottom: 15,
    paddingTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 150,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  mediaOption: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 65,
    borderRadius: 7,
    paddingTop: 6,
  },
  mediaOptionText: {
    fontFamily: family,
    fontSize: small,
    color: gray,
  },
  iconContainer: {
    position: "absolute",
    top: -25,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
  },
});
