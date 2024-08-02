import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import RegularText from "@/src/Components/RegularText/RegularText";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { handleLayout } from "@/src/Utils/Funcs";

const ManagerSignUpBtns: INoPropsReactComponent = () => {
  const [ViewHeight, setViewHeight] = useState<number>(0);
  const { width, height } = useWindowDimensions();

  const handleCreateAccount = () =>
    router.replace("account/manager/createAccount");

  return (
    <View style={styles.container}>
      <View
        style={styles.subHeader}
        onLayout={(e) => handleLayout(e, setViewHeight)}
      >
        <Image source={require("./Assets/manager.png")} style={styles.image} />
        <ThemedText type="header">
          You do not have a property manager account.
        </ThemedText>
        <RegularText>
          Please create an account now and add your own properties to our
          platform.
        </RegularText>
      </View>
      <View
        style={[
          {
            width: width > 500 ? 400 : "100%",
            height: height - ViewHeight - 100,
          },
          styles.btnContainer,
        ]}
      >
        <CustomButton
          title="create account"
          onPressFunc={handleCreateAccount}
        />
      </View>
    </View>
  );
};

export default ManagerSignUpBtns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 20,
    paddingBottom: 20,
  },
  subHeader: { alignSelf: "center", alignItems: "center", gap: 10 },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  btnContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
