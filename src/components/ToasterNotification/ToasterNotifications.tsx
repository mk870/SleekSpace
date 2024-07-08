import React from "react";
import Toast from "react-native-root-toast";

import { primary, white } from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";

type Props = {
  message: string;
  isVisible: boolean;
};

const ToasterNotification: React.FC<Props> = ({ message, isVisible }) => {
  return (
    <Toast
      visible={isVisible}
      animation
      shadow
      backgroundColor={primary}
      textColor={white}
      position={60}
      hideOnPress
      duration={2000}
      containerStyle={{
        minWidth: 180,
        borderRadius:10
      }}
      textStyle={{
        fontFamily: family,
        fontSize: small,
      }}
    >
      {message}
    </Toast>
  );
};

export default ToasterNotification;