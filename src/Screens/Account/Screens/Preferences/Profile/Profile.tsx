import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";

import ThemedText from "@/src/Components/ThemedText/ThemedText";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import Avatar from "./Components/Avatar/Avatar";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { dark, light, primary, red } from "@/src/Theme/Colors";
import { styles } from "./Styles";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import MessageModal from "@/src/Components/Modals/MessageModal";

const Profile: INoPropsReactComponent = () => {
  const [openDeleteAccountConfirmation, setOpenDeleteAccountConfirmation] =
    useState<boolean>(false);
  const {
    familyName,
    givenName,
    email,
    whatsAppNumber,
    contactNumber,
    location,
  } = useAppSelector((state) => state.user.value);
  const theme = useAppSelector((state) => state.theme.value);
  const iconSize = 25;
  const iconColor = primary;
  const { width } = useWindowDimensions();
  const personalDetails = [
    {
      name: "Email",
      value: email,
      icon: <Fontisto name="email" size={iconSize} color={iconColor} />,
    },
    {
      name: "Phone",
      value: contactNumber,
      icon: <Feather name="phone" size={iconSize} color={iconColor} />,
    },
    {
      name: "WhatsApp",
      value: whatsAppNumber,
      icon: <FontAwesome name="whatsapp" size={iconSize} color={iconColor} />,
    },
    {
      name: "Location",
      value: location,
      icon: (
        <Ionicons name="location-outline" size={iconSize} color={iconColor} />
      ),
    },
  ];

  return (
    <Screen>
      <StackScreen>
        <View style={styles.container}>
          <View style={styles.userDetails}>
            <Avatar />
            <ThemedText type="header">{`${givenName} ${familyName}`}</ThemedText>
            <Text
              style={[
                styles.emailText,
                { color: theme === "light" ? light.text : dark.text },
              ]}
            >
              {email}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.subHeaderText,
                  { color: theme === "light" ? light.text : dark.text },
                ]}
              >
                Personal Information
              </Text>
              <TouchableOpacity onPress={()=>router.push("/account/profile/update")}>
                <Text style={styles.editText}>edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              {personalDetails.map(({ name, value, icon }) => (
                <View
                  style={[
                    styles.personalDetail,
                    {
                      backgroundColor:
                        theme === "light" ? light.darkGray : dark.darkGray,
                    },
                  ]}
                  key={name}
                >
                  <View style={styles.personalDetailIconAndText}>
                    {icon}
                    <ThemedText type="regular">{name}</ThemedText>
                  </View>
                  <ThemedText type="regular">{value}</ThemedText>
                </View>
              ))}
            </View>
          </View>
          <View
            style={[styles.btnContainer, { width: width > 700 ? 600 : "100%" }]}
          >
            <TouchableOpacity style={styles.resetPasswordBtn}>
              <Text style={styles.resetPasswordText}>Reset Password</Text>
            </TouchableOpacity>
            <CustomButton
              title="Logout"
              onPressFunc={() => console.log("delete")}
            />
            <CustomButton
              title="Delete Account"
              color={red}
              onPressFunc={() => setOpenDeleteAccountConfirmation(true)}
            />
          </View>
          <MessageModal
            handleCancel={() => setOpenDeleteAccountConfirmation(false)}
            isModalVisible={openDeleteAccountConfirmation}
            message="Are your sure you want to delete your account"
            header="Delete Account?"
            type="confirmation"
            handleConfirm={()=>console.log("delete")}
          />
        </View>
      </StackScreen>
    </Screen>
  );
};

export default Profile;
