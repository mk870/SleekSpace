import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { dark, light, primary, pureWhite } from "@/src/Theme/Colors";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { family, small } from "@/src/Theme/Font";
import ThemedText from "../ThemedText/ThemedText";

type Props = {
  handleCancel: IVoidFunc;
  isModalVisible: boolean;
  type: "profile-Photo" | "property-Photo";
  setImage?: React.Dispatch<React.SetStateAction<string>>;
};

const MediaModal: React.FC<Props> = ({
  handleCancel,
  isModalVisible,
  type,
  setImage,
}) => {
  const [facing, setFacing] = useState<CameraType>(
    type === "profile-Photo" ? "front" : "back"
  );
  //const [permission, requestPermission] = useCameraPermissions();
  const theme = useAppSelector((state) => state.theme.value);
  const { width } = useWindowDimensions();
  const iconSize = 27;
  const color = primary;

  const openGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled && setImage) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled && setImage) {
      setImage(result.assets[0].uri);
    }
  };

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
    paddingTop: 10,
    width: 65,
    borderRadius: 7,
  },
  mediaOptionText: {
    fontFamily: family,
    fontSize: small,
    color: "gray",
  },
});
