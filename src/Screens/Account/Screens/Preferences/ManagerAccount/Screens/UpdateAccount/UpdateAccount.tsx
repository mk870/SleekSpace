import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import { BUTTON_MAX_WIDTH, MAX_INPUT_WIDTH, SCREEN_BREAK_POINT } from "@/src/Utils/Constants";
import {
  emailValidator,
  getManagerContactNumber,
  getManagerContactNumberCountryAbbrv,
  getManagerContactNumberCountryCode,
  handleLayout,
} from "@/src/Utils/Funcs";
import PhoneNumberField from "@/src/Components/PhoneNumberField/PhoneNumberField";
import { IPhoneNumberDetails } from "../../../Profile/Screens/Types";
import { family, small } from "@/src/Theme/Font";
import { red } from "@/src/Theme/Colors";
import InputField from "@/src/Components/InputField/InputField";
import ProfilePicture from "@/src/Components/ProfilePicture/ProfilePicture";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { UpdateManager } from "@/src/HttpServices/Mutations/ManagerHttpFunctions";
import { useAppDispatch, useAppSelector } from "@/src/Redux/Hooks/Config";
import { addManagerAccount } from "@/src/Redux/Slices/ManagerAccountSlice/ManagerSlice";
import MessageModal from "@/src/Components/Modals/MessageModal";
import RegularText from "@/src/Components/RegularText/RegularText";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";

const UpdateAccount: INoPropsReactComponent = () => {
  const [viewHeight, setHeightView] = useState<number>(0);
  const manager = useAppSelector((state) => state.managerAccount.value);
  const [email, setEmail] = useState<string>(manager.email);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>(manager.name);
  const [isNameValidationError, setIsNameValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const [phoneNumberDetails, setPhoneNumberDetails] =
    useState<IPhoneNumberDetails>({
      number: getManagerContactNumber(manager.contacts, "phone"),
      countryCode: getManagerContactNumberCountryCode(
        manager.contacts,
        "phone"
      ),
      countryAbbrv: getManagerContactNumberCountryAbbrv(
        manager.contacts,
        "phone"
      ),
    });
  const [whatsAppNumberDetails, setWhatsAppNumberDetails] =
    useState<IPhoneNumberDetails>({
      number: getManagerContactNumber(manager.contacts, "whatsapp"),
      countryCode: getManagerContactNumberCountryCode(
        manager.contacts,
        "whatsapp"
      ),
      countryAbbrv: getManagerContactNumberCountryAbbrv(
        manager.contacts,
        "whatsapp"
      ),
    });
  const [httpError, setHttpError] = useState<string>("");
  const [ommissionError, setOmmissionError] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(true);
  const [image, setImage] = useState<string>("");
  const [isWhatsAppNumberValid, setIsWhatsAppNumberValid] =
    useState<boolean>(true);
  const { width, height } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const { accessToken, id } = useAppSelector((state) => state.user.value);

  useEffect(() => {
    if (email !== "") {
      emailValidator(setIsEmailValidationError, email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [email]);

  useEffect(() => {
    if (name !== "" || !name) {
      if (name && name.length < 4) {
        setIsNameValidationError(true);
      } else {
        setIsNameValidationError(false);
      }
    } else {
      setIsNameValidationError(false);
    }
  }, [name]);

  const updateManagerAccount = useMutation({
    mutationFn: UpdateManager,
    onSuccess: (res) => {
      dispatch(addManagerAccount(res.data.response));
      setIsSuccessModalOpen(true);
    },
    onError: (error: any) => {
      if (error.response?.data?.error !== "") {
        setHttpError(error.response?.data?.error);
      } else {
        setHttpError("Something went wrong");
      }
    },
    onSettled: () => setIsLoading(false),
  });

  const handleUpdate = () => {
    setOmmissionError(false);
    if (
      name &&
      !isNameValidationError &&
      whatsAppNumberDetails.number &&
      phoneNumberDetails.number
    ) {
      setIsLoading(true);
      updateManagerAccount.mutate({
        accessToken,
        manager: {
          name,
          id: manager.id,
          email,
          userId: id,
          profilePicture: image ? null: manager.profilePicture,
          contacts: [
            {
              number: whatsAppNumberDetails.number
                ? whatsAppNumberDetails.number
                : "",
              countryAbbrv: whatsAppNumberDetails.countryAbbrv
                ? whatsAppNumberDetails.countryAbbrv
                : "",
              countryCode: whatsAppNumberDetails.countryCode
                ? whatsAppNumberDetails.countryCode
                : "",
              type: "whatsapp",
              id: manager.contacts.filter(
                (contact) => contact.type === "whatsapp"
              )[0].id,
            },
            {
              number: phoneNumberDetails.number
                ? phoneNumberDetails.number
                : "",
              countryAbbrv: phoneNumberDetails.countryAbbrv
                ? phoneNumberDetails.countryAbbrv
                : "",
              countryCode: phoneNumberDetails.countryCode
                ? phoneNumberDetails.countryCode
                : "",
              type: "phone",
              id: manager.contacts.filter(
                (contact) => contact.type === "phone"
              )[0].id,
            },
          ],
        },
      });
    } else {
      setOmmissionError(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    router.back();
  };
  return (
    <Screen>
      <StackScreen>
        <View style={styles.container}>
          <View
            style={[
              styles.inputWrapper,
              { width: width > SCREEN_BREAK_POINT ? MAX_INPUT_WIDTH : "100%" },
            ]}
            onLayout={(e) => handleLayout(e, setHeightView)}
          >
            <ProfilePicture uri={image} setImage={setImage} />
            <InputField
              textValue={name}
              placeHolder="company/personal name"
              width={"100%"}
              handleOnChangeText={(e) => setName(e)}
              height={55}
              contentType="givenName"
              type="givenName"
              label="Name"
              borderColor={isNameValidationError ? red : undefined}
              isRequired
            />
            {isNameValidationError && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  please enter atleast 4 characters
                </Text>
              </View>
            )}
            <InputField
              textValue={email}
              placeHolder="email"
              width={"100%"}
              handleOnChangeText={(e) => setEmail(e)}
              height={55}
              contentType="emailAddress"
              type="emailAddress"
              label="Email"
              borderColor={isEmailValidationError ? red : undefined}
            />
            {isEmailValidationError && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  please enter valid email address
                </Text>
              </View>
            )}
            <PhoneNumberField
              setPhoneNumberDetails={setPhoneNumberDetails}
              label="Phone Number"
              initialValue={getManagerContactNumber(manager.contacts, "phone")}
              isNumberValid={isPhoneNumberValid}
              setIsNumberValid={setIsPhoneNumberValid}
              phoneNumberDetails={phoneNumberDetails}
              isRequired
            />
            {!isPhoneNumberValid && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  this number is not valid in this country
                </Text>
              </View>
            )}
            <PhoneNumberField
              setPhoneNumberDetails={setWhatsAppNumberDetails}
              label="Whatsapp Number"
              initialValue={getManagerContactNumber(
                manager.contacts,
                "whatsapp"
              )}
              isNumberValid={isWhatsAppNumberValid}
              setIsNumberValid={setIsWhatsAppNumberValid}
              phoneNumberDetails={whatsAppNumberDetails}
              isRequired
            />
            {!isWhatsAppNumberValid && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  this number is not valid in this country
                </Text>
              </View>
            )}
            {ommissionError && (
              <Text style={styles.ommissionErrorText}>
                please fill all the required fields.
              </Text>
            )}
            <RegularText>
              Remember, if you update your information, all your properties will
              also be updated, so make sure it is accurate.
            </RegularText>
          </View>
          <View
            style={[
              {
                width: width > SCREEN_BREAK_POINT ? BUTTON_MAX_WIDTH : "100%",
                height: ommissionError ? "auto" : height - viewHeight - 70,
              },
              styles.btnContainer,
            ]}
          >
            <CustomButton
              title={isLoading ? "loading" : "Update Manager Account"}
              onPressFunc={handleUpdate}
              isDisabled={isLoading}
            />
          </View>
          <MessageModal
            message={httpError}
            type="error"
            isModalVisible={httpError ? true : false}
            handleCancel={() => setHttpError("")}
          />
          <MessageModal
            header="Account Updated!"
            message={
              "you have successfully updated your property manager account. Please note, all your properties will be updated with this new information."
            }
            type="success"
            isModalVisible={isSuccessModalOpen}
            handleCancel={handleCloseSuccessModal}
          />
        </View>
      </StackScreen>
    </Screen>
  );
};

export default UpdateAccount;

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
    gap: 10,
  },
  errorText: {
    fontFamily: family,
    color: red,
    fontSize: 13,
    marginTop: -10,
  },
  ommissionErrorText: {
    fontFamily: family,
    color: red,
    fontSize: small,
  },
  row: { width: "100%", justifyContent: "space-between", marginTop: -10 },
  btnContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  errorContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: -1,
  },
});
