import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import { family, medium, small } from "@/src/Theme/Font";
import { legalities, preferences, settings } from "./AccountOptions/Options";
import { dark, light, pureWhite } from "@/src/Theme/Colors";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { useAppSelector } from "@/src/Redux/Hooks/Config";

const Account: INoPropsReactComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  const router = useRouter();
  const iconSize = 24;
  const iconColor = "gray";
  const { width } = useWindowDimensions();
  const onNavigate = (route: string) => {
    router.push(route);
  };
  const handleSignOut = () => {
    router.push("/login")
    console.log("signout");
  };
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={styles.lottieContainer}>
        <LottieView
          source={require("../../Components/Lotties/user-account.json")}
          autoPlay
          loop
          style={{
            height: 100,
            width: 100,
          }}
        />
        </View> */}
        <View style={[styles.optionsDetailsWrapper,{marginTop:20}]}>
          <Text
            style={[
              styles.headerText,
              { color: theme === "light" ? light.text : dark.text },
            ]}
          >
            Preferences
          </Text>
          <View
            style={[
              styles.optionsContainer,
              {
                backgroundColor: theme === "light" ? pureWhite : dark.darkGray,
              },
            ]}
          >
            {preferences.map(({ name, icon, route }, index) => (
              <Pressable
                key={name}
                style={styles.option}
                onPress={() => onNavigate(route)}
              >
                {icon}
                <View
                  style={[
                    styles.optionIconText,
                    {
                      borderBottomWidth:
                        index === preferences.length - 1 ? 0 : 1,
                      borderBottomColor:
                        theme === "light" ? dark.background : "gray",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      { color: theme === "light" ? light.text : dark.text },
                    ]}
                  >
                    {name}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={iconSize}
                    color={iconColor}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.optionsDetailsWrapper}>
          <Text
            style={[
              styles.headerText,
              { color: theme === "light" ? light.text : dark.text },
            ]}
          >
            Settings
          </Text>
          <View
            style={[
              styles.optionsContainer,
              {
                backgroundColor: theme === "light" ? pureWhite : dark.darkGray,
              },
            ]}
          >
            {settings.map(({ name, icon, route }, index) => (
              <Pressable
                key={name}
                style={styles.option}
                onPress={() => onNavigate(route)}
              >
                {icon}
                <View
                  style={[
                    styles.optionIconText,
                    {
                      borderBottomWidth: index === settings.length - 1 ? 0 : 1,
                      borderBottomColor:
                        theme === "light" ? dark.background : "gray",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      { color: theme === "light" ? light.text : dark.text },
                    ]}
                  >
                    {name}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={iconSize}
                    color={iconColor}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.optionsDetailsWrapper}>
          <Text
            style={[
              styles.headerText,
              { color: theme === "light" ? light.text : dark.text },
            ]}
          >
            Legalities
          </Text>
          <View
            style={[
              styles.optionsContainer,
              {
                backgroundColor: theme === "light" ? pureWhite : dark.darkGray,
              },
            ]}
          >
            {legalities.map(({ name, icon, route }, index) => (
              <Pressable
                key={name}
                style={styles.option}
                onPress={() => onNavigate(route)}
              >
                {icon}
                <View
                  style={[
                    styles.optionIconText,
                    {
                      borderBottomWidth:
                        index === legalities.length - 1 ? 0 : 1,
                      borderBottomColor:
                        theme === "light" ? dark.background : "gray",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      { color: theme === "light" ? light.text : dark.text },
                    ]}
                  >
                    {name}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={iconSize}
                    color={iconColor}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
        <View
          style={[
            {
              width: width > 500 ? 400 : "100%",
            },
            styles.btn,
          ]}
        >
          <CustomButton
            title={isLoading ? "loading" : "Logout"}
            onPressFunc={handleSignOut}
            isDisabled={isLoading}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    gap: 20,
    paddingBottom: 20,
  },
  lottieContainer: {
    alignSelf: "center",
  },
  optionsDetailsWrapper: {
    gap: 10,
  },
  optionsContainer: {
    gap: 10,
    borderRadius: 10,
  },
  option: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 15,
  },
  optionIconText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    height: 45,
  },
  optionText: {
    fontFamily: family,
    fontSize: small,
    fontWeight:"700"
  },
  headerText: {
    fontFamily: family,
    fontSize: medium,
    fontWeight: "bold",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
