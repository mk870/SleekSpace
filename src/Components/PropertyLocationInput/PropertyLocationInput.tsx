import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import ThemedText from "../ThemedText/ThemedText";
import { FontAwesome5 } from "@expo/vector-icons";
import Row from "../Row/Row";
import { gray, red } from "@/src/Theme/Colors";
import { ISearchLocation } from "@/src/GlobalTypes/LocationIQ/LocationIQTypes";
import { family, small } from "@/src/Theme/Font";
import { shortenString } from "@/src/Utils/Funcs";
import SearchLocationModal from "../Modals/Location/SearchLocationModal";

type Props = {
  setLocation: (location: string | ISearchLocation) => void;
  location: string | ISearchLocation;
  borderColor: string;
};

const PropertyLocationInput: React.FC<Props> = ({
  setLocation,
  location,
  borderColor,
}) => {
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const getPropertyInputValue = () => {
    if (location) {
      if (typeof location !== "string") {
        return shortenString(
          location.display_place
            ? location.display_place
            : location.display_name,
          37
        );
      } else {
        return location;
      }
    } else return "Enter Property Location";
  };
  return (
    <View style={styles.container}>
      <Row style={styles.row}>
        <ThemedText type="regular">Property Location</ThemedText>
        <View style={{ marginTop: 5 }}>
          <FontAwesome5 name="star-of-life" size={7} color={red} />
        </View>
      </Row>
      <Pressable
        style={[
          styles.inputContainer,
          {
            borderColor,
          },
        ]}
        onPress={() => setOpenLocationModal(true)}
      >
        <Text style={styles.text}>{getPropertyInputValue()}</Text>
      </Pressable>
      <SearchLocationModal
        isModalVisible={openLocationModal}
        handleCancel={() => setOpenLocationModal(false)}
        setLocation={setLocation}
      />
    </View>
  );
};

export default PropertyLocationInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
  },
  inputContainer: {
    width: "100%",
    height: 57,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    justifyContent: "center",
  },
  row: {
    width: "100%",
    gap: 5,
    marginBottom: -3,
  },
  text: {
    fontFamily: family,
    fontSize: small,
    color: gray,
  },
});
