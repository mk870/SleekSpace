import {
  Modal,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { dark, light, primary, pureWhite } from "@/src/Theme/Colors";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { family, small } from "@/src/Theme/Font";
import ThemedText from "../ThemedText/ThemedText";

type Props = {
  handleCancel: IVoidFunc;
  isModalVisible: boolean;
  type: "profile-Photo" | "property-Photo";
};

const MediaModal: React.FC<Props> = ({
  handleCancel,
  isModalVisible,
  type,
}) => {
  const theme = useAppSelector((state) => state.theme.value);
  const { width } = useWindowDimensions();
  const iconSize = 27;
  const color = primary;
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      <View
        onTouchEnd={handleCancel}
        style={[
          styles.container,
          {
            backgroundColor: theme === "light" ? "#000000b3" : "#1b1b1cb3",
          },
        ]}
      >
        <View
          style={[
            styles.subContainer,
            {
              width: width > 500 ? 420 : 250,
              backgroundColor: theme === "light" ? pureWhite : dark.background,
            },
          ]}
        >
          <ThemedText type="header">
            {type === "profile-Photo" ? "Profile Photo" : "Property Photos"}
          </ThemedText>
          <View style={styles.row}>
            <View
              style={[
                styles.mediaOption,
                {
                  backgroundColor:
                    theme === "light" ? light.darkGray : dark.darkGray,
                },
              ]}
            >
              <Feather name="camera" size={iconSize} color={color} />
              <Text style={styles.mediaOptionText}>camera</Text>
            </View>
            <View
              style={[
                styles.mediaOption,
                {
                  backgroundColor:
                    theme === "light" ? light.darkGray : dark.darkGray,
                },
              ]}
            >
              <AntDesign name="picture" size={iconSize} color={color} />
              <Text style={styles.mediaOptionText}>gallery</Text>
            </View>
            <View
              style={[
                styles.mediaOption,
                {
                  backgroundColor:
                    theme === "light" ? light.darkGray : dark.darkGray,
                },
              ]}
            >
              <AntDesign name="delete" size={iconSize} color={color} />
              <Text style={styles.mediaOptionText}>remove</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MediaModal;

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
  subContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 130,
    gap: 15,
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
    height: 60,
    width: 60,
    borderRadius: 7,
  },
  mediaOptionText: {
    fontFamily: family,
    fontSize: small,
    fontWeight: "bold",
    color: "gray",
  },
});
