import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";

import { light, pureWhite } from "@/src/Theme/Colors";
import { useAppDispatch, useAppSelector } from "@/src/Redux/Hooks/Config";
import { family, medium } from "@/src/Theme/Font";
import { signedInContent, signedOutContent } from "./Options/Content";
import { expoSecureValueKeyNames } from "@/src/Utils/Constants";
import { saveSecureValue } from "@/src/Utils/Funcs";
import MessageModal from "../../Modals/MessageModal";
import { addAccessToken } from "@/src/Redux/Slices/UserSlice/User";

type Props = {
  closeBottomSheetFunc: () => void;
};

const ProfileContent: React.FC<Props> = ({ closeBottomSheetFunc }) => {
  const [openLogoutConfirmation, setOpenLogoutConfirmation] =
    useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  const { accessToken } = useAppSelector((state) => state.user.value);
  const underLayColor = theme === "light" ? "#DDDBDE" : "#3B3B3B";
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    setOpenLogoutConfirmation(false);
    await saveSecureValue(expoSecureValueKeyNames.accessToken, "");
    dispatch(addAccessToken(""));
    closeBottomSheetFunc();
  };

  return (
    <View style={styles.bottomSheetContainer}>
      {accessToken &&
        signedInContent.map(({ name, icon, onPressFunc }) => (
          <TouchableHighlight
            key={name}
            style={styles.touchable}
            underlayColor={underLayColor}
            onPress={
              name === "Logout"
                ? () => setOpenLogoutConfirmation(true)
                : () => {
                    onPressFunc();
                    closeBottomSheetFunc();
                  }
            }
          >
            <View style={styles.optionContainer}>
              {icon}
              <Text
                style={[
                  styles.text,
                  { color: theme === "light" ? light.text : pureWhite },
                ]}
              >
                {name}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      {!accessToken &&
        signedOutContent.map(({ name, icon, onPressFunc }) => (
          <TouchableHighlight
            key={name}
            style={styles.touchable}
            underlayColor={underLayColor}
            onPress={() => {
              onPressFunc();
              closeBottomSheetFunc();
            }}
          >
            <View style={styles.optionContainer}>
              {icon}
              <Text
                style={[
                  styles.text,
                  { color: theme === "light" ? light.text : pureWhite },
                ]}
              >
                {name}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      <MessageModal
        handleCancel={() => setOpenLogoutConfirmation(false)}
        isModalVisible={openLogoutConfirmation}
        message="Are your sure you want to logout"
        header="Logout?"
        type="confirmation"
        handleConfirm={handleLogOut}
      />
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 3,
    paddingTop: 7,
    paddingHorizontal: 5,
  },
  touchable: {
    width: "100%",
    height: 45,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 5,
  },
  optionContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  text: {
    fontFamily: family,
    fontSize: medium,
    marginTop: 3,
  },
});
