import { Modal, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useCameraPermissions } from "expo-camera";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import GrantedPermissionView from "./Components/GrantedPermissionView";
import DeniedPermissionView from "./Components/DeniedPermissionView";

type Props = {
  handleCancel: IVoidFunc;
  isModalVisible: boolean;
  type: "profile-Photo"|"property-Photo";
  setImage?: React.Dispatch<React.SetStateAction<string>>;
  setImageBase64?: React.Dispatch<React.SetStateAction<string>>;
  setMediaType?: React.Dispatch<React.SetStateAction<string>>;
  setMediaSize?: React.Dispatch<React.SetStateAction<number>>;
};

const MediaModal: React.FC<Props> = ({
  handleCancel,
  isModalVisible,
  type,
  setImage,
  setImageBase64,
  setMediaSize,
  setMediaType,
}) => {
  const [permission, requestPermission] = useCameraPermissions();
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    requestPermission();
  }, []);

  const captureMediaInformation = (result: ImagePicker.ImagePickerResult)=>{
    if (!result.canceled && setImage && setImageBase64) {
      setImage(result.assets[0].uri);
      setImageBase64(result.assets[0].base64 as string);
      if (setMediaSize) {
        setMediaSize(result.assets[0].fileSize ? result.assets[0].fileSize : 0);
      }
      if (setMediaType) {
        setMediaType(
          result.assets[0].mimeType ? result.assets[0].mimeType : ""
        );
      }
    }
  }

  const openGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true,
    });
    captureMediaInformation(result)
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true
    });
    captureMediaInformation(result)
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
        {permission?.status === ImagePicker.PermissionStatus.GRANTED ? (
          <GrantedPermissionView
            openCamera={openCamera}
            openGallery={openGallery}
            type={type}
          />
        ) : (
          <DeniedPermissionView handleCancel={handleCancel} />
        )}
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
});
