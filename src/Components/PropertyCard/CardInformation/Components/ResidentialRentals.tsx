import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import millify from "millify";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IResidentialRentalPropertyWithManager } from "@/src/GlobalTypes/Property/Residential/RentalTypes";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import Row from "@/src/Components/Row/Row";
import { primary } from "@/src/Theme/Colors";
import IconContainer from "./IconContainer/IconContainer";
import RegularText from "@/src/Components/RegularText/RegularText";
import { family, small } from "@/src/Theme/Font";
import ManagerImage from "./ManagerImage/ManagerImage";
import ThreeDots from "./ThreeDots/ThreeDots";

type Props = {
  property: IResidentialRentalPropertyWithManager;
};

const ResidentialRentalsInformation: React.FC<Props> = ({
  property: {
    bathrooms,
    postedTime,
    numberOfRoomsToLet,
    type,
    currency,
    rentAmount,
    manager: {
      profilePicture: { uri },
      name,
    },
  },
}) => {
  const iconSize = 22;
  return (
    <Row style={styles.container}>
      <ManagerImage uri={uri} />
      <View style={styles.infoContainer}>
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <ThemedText type="subHeader">{type}</ThemedText>
          <Text style={styles.rent}>{`${currency}${millify(
            rentAmount
          )}/month`}</Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Row style={{ alignItems: "center", gap: 5 }}>
            <IconContainer>
              <Ionicons name="bed-outline" size={iconSize} color={primary} />
            </IconContainer>
            <Row style={{ gap: 5 }}>
              <ThemedText type="regular">Rooms:</ThemedText>
              <RegularText>{numberOfRoomsToLet}</RegularText>
            </Row>
          </Row>
          <Row style={{ alignItems: "center", gap: 5 }}>
            <IconContainer>
              <MaterialCommunityIcons
                name="shower"
                size={iconSize}
                color={primary}
              />
            </IconContainer>
            <Row style={{ gap: 5 }}>
              <ThemedText type="regular">Bathrooms:</ThemedText>
              <RegularText>{bathrooms}</RegularText>
            </Row>
          </Row>
        </Row>
        <View style={styles.details}>
          <RegularText>{name}</RegularText>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RegularText>{postedTime}</RegularText>
            <ThreeDots />
          </Row>
        </View>
      </View>
    </Row>
  );
};

export default ResidentialRentalsInformation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 2,
    flex: 1,
  },
  details: {
    flexDirection: "column",
  },
  rent: {
    fontFamily: family,
    fontSize: small,
    color: primary,
    marginTop: 5,
  },
});
