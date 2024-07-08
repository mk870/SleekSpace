import { Animated } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import { tabsMenu } from "@/src/Utils/Constants";
import { primary } from "@/src/Theme/Colors";

type Props = {
  focused: boolean;
  name: string;
  color: string;
};

const TabsIcons: React.FC<Props> = ({ focused, name, color }) => {
  const iconSize = 24;
  const icons = () => {
    if (name === tabsMenu.home) {
      if (focused)
        return <Ionicons name="home-sharp" color={color} size={iconSize} />;
      else
        return <Ionicons name="home-outline" size={iconSize} color={color} />;
    } else if (name === tabsMenu.favorites) {
      if (focused)
        return <MaterialIcons name="favorite" size={iconSize} color={color} />;
      else
        return (
          <MaterialIcons
            name="favorite-outline"
            size={iconSize}
            color={color}
          />
        );
    } else if (name === tabsMenu.account) {
      if (focused)
        return (
          <MaterialCommunityIcons
            name="account-circle"
            size={iconSize}
            color={color}
          />
        );
      else
        return (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={iconSize}
            color={color}
          />
        );
    } else if (name === tabsMenu.search) {
      if (focused)
        return <Feather name="search" size={iconSize} color={color} />;
      else return <Feather name="search" size={iconSize} color={color} />;
    } else {
      return <Ionicons name="add-circle" size={35} color={primary} />;
    }
  };
  return (
    <Animated.View
      style={{
        backgroundColor: name === tabsMenu.post ? "" : focused ? primary : "",
        paddingHorizontal:15,
        borderRadius: 20,
      }}
    >
      {icons()}
    </Animated.View>
  );
};

export default TabsIcons;
