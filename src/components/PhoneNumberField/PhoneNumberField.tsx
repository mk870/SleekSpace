import { StyleSheet, useWindowDimensions, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";

import { useAppSelector } from "@/src/Redux/Hooks/Config";
import ThemedText from "../ThemedText/ThemedText";
import { dark, light, white } from "@/src/Theme/Colors";

type Props = {
  setPhoneValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  label: string;
  type: "whatsapp" | "call";
};

const PhoneNumberField: React.FC<Props> = ({ setPhoneValue, label, type }) => {
  const { whatsAppNumber, contactNumber } = useAppSelector(
    (state) => state.user.value
  );
  const [value, setValue] = useState(
    type === "call" ? contactNumber : whatsAppNumber
  );
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const { width } = useWindowDimensions();
  const theme = useAppSelector((state) => state.theme.value);
  useEffect(() => {
    if (value) {
      const checkValid = phoneInput.current?.isValidNumber(value);
      setValid(checkValid ? checkValid : false);
      setPhoneValue(value);
    } else {
      setValid(true);
      setPhoneValue(value);
    }
  }, [value]);
  return (
    <View style={[styles.container, { width: width > 700 ? 600 : "100%" }]}>
      <View style={styles.labelContainer}>
        <ThemedText type="regular">{label}</ThemedText>
      </View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="ZW"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setValue(text);
        }}
        containerStyle={{
          width: "100%",
          borderRadius: 7,
          borderWidth: 1,
          borderColor: valid ? "gray" : "red",
          backgroundColor: "transparent",
        }}
        textContainerStyle={[styles.textContainer, { borderLeftColor: "gray" }]}
        textInputStyle={{ color: theme === "light" ? light.text : dark.text }}
        codeTextStyle={{ color: theme === "light" ? light.text : dark.text }}
        renderDropdownImage={
          <AntDesign
            name="caretdown"
            size={14}
            color={theme === "light" ? dark.darkGray : white}
          />
        }
        withDarkTheme={theme === "light" ? false : true}
      />
    </View>
  );
};

export default PhoneNumberField;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  labelContainer: {
    width: "100%",
  },
  textContainer: {
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "transparent",
    borderLeftWidth: 1,
  },
});
