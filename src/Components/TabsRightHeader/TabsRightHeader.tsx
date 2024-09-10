import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { Image } from "expo-image";

import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { primary, pureWhite } from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";
import { imageBlurhash } from "@/src/Utils/Constants";

type Props = {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
};

const TabsRightHeader: React.FC<Props> = () => {
  const [timeStamp, setTimeStamp] = useState<number | null>(null);
  const { accessToken, profilePicture, givenName, familyName } = useAppSelector(
    (state) => state.user.value
  );

  useEffect(() => {
    if (profilePicture.uri) {
      setTimeStamp(Date.now());
    }
  }, [profilePicture]);

  return (
    <View style={styles.container}>
      {accessToken && (
        <TouchableOpacity
          style={styles.subContainer}
          onPress={() => router.push("/account/profile")}
        >
          {profilePicture.uri ? (
            <Image
              source={{ uri: `${profilePicture.uri}?timestamp=${timeStamp}` }}
              style={styles.image}
              placeholder={{ blurhash: imageBlurhash }}
            />
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
    justifyContent: "center",
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
