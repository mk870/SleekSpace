import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import ProfilePicture from "@/src/Components/ProfilePicture/ProfilePicture";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SIZE_SCREEN_BREAK_POINT,
} from "@/src/Utils/Constants";
import { handleLayout } from "@/src/Utils/Funcs";
import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import MessageModal from "@/src/Components/Modals/MessageModal";
import { uploadFileToFirebase } from "@/src/Firebase/config";

const ProfilePictureUpdate: INoPropsReactComponent = () => {
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string>("");
  const [userData, setUserData] = useState<IUser | null>(null);
  const { avatar, accessToken, id, givenName } = useAppSelector(
    (state) => state.user.value
  );
  const [viewHeight, setViewHeight] = useState<number>(0);
  const { width, height } = useWindowDimensions();

  const handlePictureUpdate = async () => {
    try {
      const uploadResult = await uploadFileToFirebase(image);
      console.log("upload result",uploadResult)

    } catch (error:any) {
      console.log("upload error", error);
      setUpdateError(error.message)
    }
  };

  const closeSuccessModal = () => {
    router.back();
    setOpenSuccessModal(false);
  };

  return (
    <Screen>
      <StackScreen>
        <View style={styles.container}>
          <View onLayout={(e) => handleLayout(e, setViewHeight)}>
            <ProfilePicture
              uri={image ? image : avatar}
              setImage={setImage}
              size="large"
            />
          </View>
          <View
            style={[
              styles.btnContainer,
              {
                width:
                  width > BUTTON_SIZE_SCREEN_BREAK_POINT
                    ? BUTTON_MAX_WIDTH
                    : "100%",
                height: height - viewHeight - 100,
              },
            ]}
          >
            <CustomButton
              title={isLoading ? "loading" : "update profile picture"}
              onPressFunc={handlePictureUpdate}
              isDisabled={isLoading}
            />
          </View>
          <MessageModal
            isModalVisible={openSuccessModal}
            header="Update Successful"
            message="your profile picture was updated successfully"
            type="success"
            handleCancel={closeSuccessModal}
          />
          <MessageModal
            isModalVisible={updateError ? true : false}
            header="Update Failed"
            message={updateError}
            type="error"
            handleCancel={() => setUpdateError("")}
          />
        </View>
      </StackScreen>
    </Screen>
  );
};

export default ProfilePictureUpdate;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 20,
    width: "100%",
  },
  btnContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
