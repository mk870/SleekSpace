import {
  ColorSchemeName,
  DimensionValue,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { Fontisto, Feather, Ionicons, Octicons } from "@expo/vector-icons";

import { ContentType } from "./Types/Types";
import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { dark, light } from "@/src/Theme/Colors";
import ThemedText from "../ThemedText/ThemedText";

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  placeHolder: string;
  handleOnChangeText: (text: string) => void;
  handleOnEnter?: IVoidFunc;
  textValue: string | undefined;
  contentType: ContentType;
  type: string;
  label?: string;
  isFocused?: boolean;
  backgroundColor?: string;
  borderColor?: string;
};

const InputField: React.FC<Props> = ({
  width,
  height,
  placeHolder,
  handleOnChangeText,
  textValue,
  contentType,
  type,
  label,
  isFocused,
  backgroundColor,
  handleOnEnter,
  borderColor,
}) => {
  const [ispassWordHidden, setIsPassWordHidden] = useState<boolean>(true);
  const iconSize = 20;
  const iconColor = "gray";
  const theme = useColorScheme();
  const secureText = () => {
    if (type === "password") {
      if (ispassWordHidden) return true;
      else return false;
    } else return false;
  };
  const keyboardAppearance = () => {
    if (type === "emailAddress") return "email-address";
    else if (type === "number") return "number-pad";
    else return "default";
  };
  return (
    <View style={styles(width, height, theme).container}>
      {label && <ThemedText type="regular">{label}</ThemedText>}
      <View style={styles(width, height, theme).inputWrapper}>
        {type === "emailAddress" && (
          <Fontisto
            name="email"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
          />
        )}
        {type === "search" && (
          <Feather
            name="search"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
            onPress={handleOnEnter}
          />
        )}
        {type === "password" && ispassWordHidden && (
          <Feather
            name="eye"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
            onPress={() => setIsPassWordHidden((value) => !value)}
          />
        )}
        {type === "password" && !ispassWordHidden && (
          <Feather
            name="eye-off"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
            onPress={() => setIsPassWordHidden((value) => !value)}
          />
        )}
        {type === "givenName" && (
          <Ionicons
            name="person-outline"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
          />
        )}
        {type === "familyName" && (
          <Ionicons
            name="people-outline"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
          />
        )}
        {label === "Code" && (
          <Octicons
            name="verified"
            size={iconSize}
            color={iconColor}
            style={styles(width, height, theme).icon}
          />
        )}
        <TextInput
          style={[
            styles(width, height, theme, borderColor).input,
            {
              backgroundColor: backgroundColor
                ? backgroundColor
                : theme === "dark"
                ? dark.darkGray
                : light.darkGray,
            },
          ]}
          value={textValue}
          onChangeText={handleOnChangeText}
          placeholder={placeHolder}
          textContentType={contentType}
          placeholderTextColor={"gray"}
          keyboardType={keyboardAppearance()}
          cursorColor={theme === "dark" ? dark.text : light.text}
          autoCorrect={false}
          enterKeyHint={"enter"}
          keyboardAppearance="dark"
          secureTextEntry={secureText()}
          autoFocus={isFocused ? isFocused : false}
          onSubmitEditing={handleOnEnter}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = (
  width: DimensionValue,
  height: DimensionValue,
  theme: ColorSchemeName,
  borderColor?: string
) =>
  StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 7,
      gap: 2,
      backgroundColor: theme === "dark" ? dark.background : light.background,
    },
    inputWrapper: {
      width: width,
      height: height,
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
    },
    icon: {
      zIndex: 2,
      position: "absolute",
      right: "5%",
    },
    input: {
      height: height,
      width: "100%",
      textAlign: "left",
      paddingLeft: 10,
      position: "relative",
      borderRadius: 7,
      color: theme === "dark" ? dark.text : light.text,
      borderColor: borderColor
        ? borderColor
        : theme === "dark"
        ? dark.background
        : light.background,
      borderWidth: 1,
    },
  });
