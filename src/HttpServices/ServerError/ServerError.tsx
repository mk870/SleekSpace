import {
  Text,
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import React from "react";

import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { family, large } from "@/src/Theme/Font";
import { dark, light, lightPrimary, red } from "@/src/Theme/Colors";

type Props = {
  handleCancel: () => void;
  message: string;
  isModalVisible: boolean;
};

const ServerError: React.FC<Props> = ({
  handleCancel,
  message,
  isModalVisible,
}) => {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const { container, errorContainer, headerText, row, btn } = styles;
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      <View style={container}>
        <View
          style={[
            errorContainer,
            {
              width: width > 500 ? 420 : 250,
              backgroundColor:
                theme === "dark" ? dark.background : light.background,
            },
          ]}
        >
          <Text style={headerText}>Error!</Text>
          <ThemedText type="regular">{message}</ThemedText>
          <View style={row}>
            <TouchableOpacity style={btn} onPress={handleCancel}>
              <ThemedText type="regular">okay</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.lightBackGround,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  errorContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: family,
    fontSize: large,
    color: red,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    paddingVertical: 5,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightPrimary,
  },
});

export default ServerError;
