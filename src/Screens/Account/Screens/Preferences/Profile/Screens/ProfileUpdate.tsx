import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { Feather } from "@expo/vector-icons";

import {
  INoPropsReactComponent,
  ISearchLocation,
} from "@/src/GlobalTypes/Types";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import PhoneNumberField from "@/src/Components/PhoneNumberField/PhoneNumberField";
import { primary, red } from "@/src/Theme/Colors";
import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { updateUserHttpFunc } from "@/src/HttpServices/Mutations/UserHttpFunctions";
import useUpdateUser from "@/src/Hooks/User/useUpdateUser";
import MessageModal from "@/src/Components/Modals/MessageModal";
import { family } from "@/src/Theme/Font";
import { IPhoneNumberDetails } from "./Types";
import LocationInputField from "@/src/Components/LocationInputField/LocationInputField";
import MyCurrentLocation from "@/src/Components/CurrentLocation/MyCurrentLocation";
import Row from "@/src/Components/Row/Row";
import RegularText from "@/src/Components/RegularText/RegularText";

const ProfileUpdate: INoPropsReactComponent = () => {
  const user = useAppSelector((state) => state.user.value);
  const accessToken = useAppSelector((state) => state.accessToken.value);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(true);
  const [isWhatsAppNumberValid, setIsWhatsAppNumberValid] =
    useState<boolean>(true);
  const [location, setLocation] = useState<ISearchLocation | string>(
    user.location
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string>("");
  const [phoneNumberDetails, setPhoneNumberDetails] =
    useState<IPhoneNumberDetails>({
      number: user.contactNumber,
      countryCode: "263",
      countryAbbrv: "ZW",
    });
  const [whatsAppNumberDetails, setWhatsAppNumberDetails] =
    useState<IPhoneNumberDetails>({
      number: user.whatsAppNumber,
      countryCode: "263",
      countryAbbrv: "ZW",
    });
  const [userData, setUserData] = useState<IUser | null>(null);
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const theme = useAppSelector((state) => state.theme.value);
  useUpdateUser(userData);

  const updateMutation = useMutation({
    mutationFn: updateUserHttpFunc,
    onSuccess: (data) => {
      setUserData(data.data.response);
      setOpenSuccessModal(true);
    },
    onError(error: any) {
      console.log(error);
      if (error.response?.data?.error !== "") {
        setUpdateError(error.response?.data?.error);
      } else setUpdateError("Something went wrong");
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleUpdate = () => {
    if (isPhoneNumberValid && isWhatsAppNumberValid) {
      console.log(phoneNumberDetails,whatsAppNumberDetails,location)
      if(typeof location === "string"){
        
      }
      setLocation("")
      setIsLoading(true);
      // updateMutation.mutate({
      //   ...user,
      //   accessToken,
      //   whatsAppNumber: whatsAppNumber ? whatsAppNumber : "",
      //   contactNumber: phoneNumber ? phoneNumber : "",
      // });
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
              setPhoneNumberDetails={setPhoneNumberDetails}
              label="Phone Number"
              initialValue={user.contactNumber}
              isNumberValid={isPhoneNumberValid}
              setIsNumberValid={setIsPhoneNumberValid}
              phoneNumberDetails={phoneNumberDetails}
            />
            {!isPhoneNumberValid && (
              <Text style={styles.errorText}>
                this number is not valid in this country
              </Text>
            )}
            <PhoneNumberField
              setPhoneNumberDetails={setWhatsAppNumberDetails}
              label="Whatsapp Number"
              initialValue={user.whatsAppNumber}
              isNumberValid={isWhatsAppNumberValid}
              setIsNumberValid={setIsWhatsAppNumberValid}
              phoneNumberDetails={whatsAppNumberDetails}
            />
            {!isWhatsAppNumberValid && (
              <Text style={styles.errorText}>
                this number is not valid in this country
              </Text>
            )}
            <LocationInputField
              placeHolder="enter your location"
              showLabel
              setLocation={setLocation}
              location={location}
            />
            <Row style={styles.row}>
              <MyCurrentLocation setLocation={setLocation} />
              <TouchableOpacity style={styles.mapContainer}>
                <Feather name="map" size={20} color={primary} />
                <RegularText>use map</RegularText>
              </TouchableOpacity>
            </Row>
          </View>
          <View
            style={[
              {
                width: width > 700 ? 600 : "100%",
                marginTop: 20,
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
  errorText: {
    fontFamily: family,
    color: red,
    fontSize: 13,
    marginTop: -19,
  },
  row: { width: "100%", justifyContent: "space-between", marginTop: -10 },
  mapContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
