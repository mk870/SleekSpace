import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { primary, pureWhite } from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";

type Props = {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
};

const TabsRightHeader: React.FC<Props> = () => {
  const { accessToken, avatar, givenName, familyName } = useAppSelector(
    (state) => state.user.value
  );
  return (
    <View style={styles.container}>
      {accessToken && (
        <TouchableOpacity
          style={styles.subContainer}
          onPress={() => router.push("/account/profile")}
        >
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.image} />
          ) : (
            <View style={styles.userInitialsContainer}>
              <Text
                style={styles.userInitialsText}
              >{`${givenName[0].toLocaleUpperCase()}${familyName[0].toLocaleUpperCase()}`}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TabsRightHeader;

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  userInitialsContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
    height: 36,
    width: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  userInitialsText: {
    color: pureWhite,
    fontFamily: family,
    fontSize: small,
  },
});
