import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import { IAccountOptions } from "../Types/Types";

const iconSize = 26;
const iconColor = "gray";

export const settings: IAccountOptions = [
  {
    name: "Change Password",
    icon: <FontAwesome5 name="lock" size={iconSize} color={iconColor} />,
    route: "/verification",
  },
  {
    name: "Theme",
    icon: (
      <MaterialCommunityIcons
        name="theme-light-dark"
        size={iconSize}
        color={iconColor}
      />
    ),
    route: "/account/theme",
  },
  {
    name: "Search History",
    icon: <MaterialIcons name="history" size={iconSize} color={iconColor} />,
    route: "/account/history",
  },
  {
    name: "Notifications",
    icon: <Ionicons name="notifications" size={iconSize} color={iconColor} />,
    route: "/account/notifications",
  },
];

export const preferences: IAccountOptions = [
  {
    name: "Profile",
    icon: <Ionicons name="person" size={iconSize} color={iconColor} />,
    route: "/account/profile",
  },
  {
    name: "Property Manager Account",
    icon: (
      <MaterialIcons
        name="real-estate-agent"
        size={iconSize}
        color={iconColor}
      />
    ),
    route: "/account/manager",
  },
  {
    name: "My Chats",
    icon: <Ionicons name="chatbubbles" size={iconSize} color={iconColor} />,
    route: "/chats",
  },
  {
    name: "My Favorites",
    icon: (
      <MaterialIcons
        name="favorite"
        size={iconSize}
        color={iconColor}
      />
    ),
    route: "/favorites",
  },
  {
    name: "Billing&Payments",
    icon: <MaterialIcons name="payments" size={iconSize} color={iconColor} />,
    route: "/account/payments",
  },
  {
    name: "Help&Support",
    icon: (
      <MaterialIcons name="contact-support" size={iconSize} color={iconColor} />
    ),
    route: "/account/support",
  },
];

export const legalities: IAccountOptions = [
  {
    name: "Legals",
    icon: <FontAwesome name="legal" size={iconSize} color={iconColor} />,
    route: "/account/legals",
  },
  {
    name: "Terms and Conditions",
    icon: <Octicons name="code-of-conduct" size={iconSize} color={iconColor} />,
    route: "/account/termsAndconditions",
  },
];
