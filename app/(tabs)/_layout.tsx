import React from "react";
import { Tabs, useSegments } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

import { family, large } from "@/src/Theme/Font";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { dark, light, pureWhite, white } from "@/src/Theme/Colors";
import { tabsMenu } from "@/src/Utils/Constants";
import TabsIcons from "@/src/Components/TabsIcons/TabsIcons";
import TabsLabels from "@/src/Components/TabsLabels/TabsLabels";
import { useAppSelector } from "@/src/Redux/Hooks/Config";

const TabsLayout = () => {
  const theme = useAppSelector((state)=>state.theme.value)
  const segments = useSegments();
  return (
    <Screen>
      <Tabs
        screenOptions={{
          headerTitleStyle: {
            fontFamily: family,
            color: theme === "light" ? light.text : dark.text,
            fontSize: large,
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme === "light" ?  pureWhite:dark.background ,
          },
          tabBarStyle: [
            styles.tabStyles,
            {
              backgroundColor: theme === "light" ? pureWhite:dark.background ,
              borderTopColor: theme === "light" ? pureWhite:dark.darkGray,
            },
          ],
          tabBarInactiveTintColor: theme === "light" ? light.text : white,
          tabBarActiveTintColor: theme === "light" ? pureWhite : white,
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
          name="(account)"
          options={{
            headerShown: segments[3] === undefined ? true : false,
            title: "My Account",
            tabBarStyle: [
              styles.tabStyles,
              {
                backgroundColor: theme === "light" ? pureWhite : dark.background,
                borderTopColor: theme === "light" ? pureWhite : dark.darkGray,
              },
            ],
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

const styles = StyleSheet.create({
  tabStyles: {
    borderTopWidth: 1,

    paddingTop: 2,
  },
});
