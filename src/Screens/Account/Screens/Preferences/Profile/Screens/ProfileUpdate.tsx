import { StyleSheet, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import PhoneNumberField from "@/src/Components/PhoneNumberField/PhoneNumberField";
import InputField from "@/src/Components/InputField/InputField";
import { white } from "@/src/Theme/Colors";
import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { updateUserHttpFunc } from "@/src/HttpServices/Mutations/UserHttpFunctions";
import useUpdateUser from "@/src/Hooks/User/useUpdateUser";
import MessageModal from "@/src/Components/Modals/MessageModal";

const ProfileUpdate: INoPropsReactComponent = () => {
  const user = useAppSelector((state) => state.user.value);
  const accessToken = useAppSelector((state) => state.accessToken.value);
  const [location, setLocation] = useState<string | undefined>(user.location);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
    user.contactNumber
  );
  const [whatsAppNumber, setWhatsAppNumber] = useState<string | undefined>(
    user.whatsAppNumber
  );
  const [userData, setUserData] = useState<IUser | null>(null);
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const theme = useAppSelector((state) => state.theme.value);
  useUpdateUser(userData);

  const updateMutation = useMutation({
    mutationFn: updateUserHttpFunc,
    onSuccess: (data) => {
      setUserData(data.data);
      setOpenSuccessModal(true);
    },
    onError(error: any) {
      if (error.response?.data?.error !== "") {
        setUpdateError(error.response?.data?.error);
      } else setUpdateError("Something went wrong");
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleUpdate = () => {
    if (phoneNumber || location || whatsAppNumber) {
      setIsLoading(true)
      updateMutation.mutate({ ...user, accessToken });
    }
  };
  const closeSuccessModal = () => {
    setOpenSuccessModal(false);
    router.back();
  };
  return (
    <Screen>
      <StackScreen>
        <View style={styles.container}>
          <ThemedText type="header">
            Please update your profile below
          </ThemedText>
          <View
            style={[styles.inputWrapper, { width: width > 700 ? 600 : "100%" }]}
          >
            <PhoneNumberField
              setPhoneValue={setPhoneNumber}
              label="Phone Number"
              type="call"
            />
            <PhoneNumberField
              setPhoneValue={setWhatsAppNumber}
              label="Whatsapp Number"
              type="whatsapp"
            />
            <InputField
              textValue={location}
              placeHolder="your location"
              width={"100%"}
              handleOnChangeText={(e) => setLocation(e)}
              height={55}
              contentType="none"
              type="location"
              label="Location"
              backgroundColor="transparent"
              borderColor={theme === "light" ? "gray" : white}
            />
          </View>
          <View
            style={[
              {
                width: width > 700 ? 600 : "100%",
                marginTop: height / 3,
                marginBottom: 15,
              },
            ]}
          >
            <CustomButton
              title={isLoading ? "loading" : "update"}
              onPressFunc={handleUpdate}
              isDisabled={isLoading}
            />
          </View>
          <MessageModal
            isModalVisible={openSuccessModal}
            header="Update Successful"
            message="profile update was successful"
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

export default ProfileUpdate;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
