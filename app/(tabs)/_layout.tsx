import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import { family, large } from "@/src/Theme/Font";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { dark, light, pureWhite, white } from "@/src/Theme/Colors";
import { tabsMenu } from "@/src/Utils/Constants";
import TabsIcons from "@/src/Components/TabsIcons/TabsIcons";
import TabsLabels from "@/src/Components/TabsLabels/TabsLabels";

const TabsLayout = () => {
  const theme = useColorScheme();
  return (
    <Screen>
      <Tabs
        screenOptions={{
          headerTitleStyle: {
            fontFamily: family,
            color: theme === "dark" ? dark.text : light.text,
            fontSize: large,
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme === "dark" ? dark.background : pureWhite,
          },
          tabBarStyle: {
            backgroundColor: theme === "dark" ? dark.background : pureWhite,
            borderTopWidth: 1,
            borderTopColor: theme === "dark" ? dark.darkGray : pureWhite,
            paddingTop:2
          },
          tabBarInactiveTintColor: theme === "dark" ? white : light.text,
          tabBarActiveTintColor: theme === "dark" ? white : pureWhite,
          tabBarLabelPosition: "below-icon",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: tabsMenu.home,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons focused={focused} color={color} name={tabsMenu.home} />
            ),
            tabBarLabel: ({ focused }) => (
              <TabsLabels focused={focused} textItem={tabsMenu.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: tabsMenu.search,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons
                focused={focused}
                color={color}
                name={tabsMenu.search}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <TabsLabels focused={focused} textItem={tabsMenu.search} />
            ),
          }}
        />
        <Tabs.Screen
          name="postproperty"
          options={{
            title: "Post A Property",
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons focused={focused} color={color} name={tabsMenu.post} />
            ),
            tabBarLabel: "",
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "My Favorites",
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons
                focused={focused}
                color={color}
                name={tabsMenu.favorites}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <TabsLabels focused={focused} textItem={tabsMenu.favorites} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "My Account",
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons
                focused={focused}
                color={color}
                name={tabsMenu.account}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <TabsLabels focused={focused} textItem={tabsMenu.account} />
            ),
          }}
        />
      </Tabs>
    </Screen>
  );
};

export default TabsLayout;
