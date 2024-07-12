import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import React from "react";
import {
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import Avatar from "./Components/Avatar/Avatar";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { family, medium, small } from "@/src/Theme/Font";
import { dark, light, primary, red, white } from "@/src/Theme/Colors";

const Profile: INoPropsReactComponent = () => {
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
  const {width} = useWindowDimensions()
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
              <TouchableOpacity>
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
          <View style={styles.wrapper}>
            <View style={{ alignSelf: "flex-start", width: "100%" }}>
              <Text
                style={[
                  styles.subHeaderText,
                  { color: theme === "light" ? light.text : dark.text },
                ]}
              >
                Utilies
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <View
                style={[
                  styles.personalDetail,
                  {
                    backgroundColor:
                      theme === "light" ? light.darkGray : dark.darkGray,
                  },
                ]}
              >
                <View style={styles.personalDetailIconAndText}>
                  <Feather name="lock" size={iconSize} color={iconColor} />
                  <ThemedText type="regular">Reset Password</ThemedText>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={iconSize}
                  color={"gray"}
                />
              </View>
              <View
                style={[
                  styles.personalDetail,
                  {
                    backgroundColor:
                      theme === "light" ? light.darkGray : dark.darkGray,
                  },
                ]}
              >
                <View style={styles.personalDetailIconAndText}>
                  <MaterialIcons
                    name="logout"
                    size={iconSize}
                    color={iconColor}
                  />
                  <ThemedText type="regular">Logout</ThemedText>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={iconSize}
                  color={"gray"}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteAccountbtn}>
            <MaterialIcons
              name="delete-outline"
              size={iconSize}
              color={white}
            />
            <Text style={styles.deleteText}>delete account</Text>
          </TouchableOpacity>
        </View>
      </StackScreen>
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  userDetails: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  emailText: {
    fontFamily: family,
    fontSize: small,
    marginTop: -7,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  subHeaderText: {
    fontFamily: family,
    fontSize: medium,
    fontWeight: "bold",
  },
  editText: {
    fontFamily: family,
    fontSize: small,
    color: primary,
  },
  infoContainer: {
    gap: 5,
  },
  personalDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  personalDetailIconAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  deleteAccountbtn:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:15,
    backgroundColor:red,
    height:40,
    borderRadius:5,
  },
  deleteText:{
    fontFamily: family,
    color:white,
    fontSize: small
  }
});
