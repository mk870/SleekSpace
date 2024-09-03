import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";

import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { primary, pureWhite, dark, light, gray } from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";
import { useAppSelector } from "@/src/Redux/Hooks/Config";

type Props = {
  type: "profile-Photo" | "property-PhotoOrVideo";
  openCamera: () => Promise<void>;
  openGallery: () => Promise<void>;
};

const GrantedPermissionView: React.FC<Props> = ({
  type,
  openCamera,
  openGallery,
}) => {
  const theme = useAppSelector((state) => state.theme.value);
  const { width } = useWindowDimensions();
  const iconSize = 27;
  const color = primary;
  return (
    <View
      style={[
        styles.container,
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
        <TouchableOpacity
          onPress={openCamera}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openGallery}
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
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GrantedPermissionView;

const styles = StyleSheet.create({
  container: {
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
    paddingTop: 10,
    width: 65,
    borderRadius: 7,
  },
  mediaOptionText: {
    fontFamily: family,
    fontSize: small,
    color: gray,
  },
});
