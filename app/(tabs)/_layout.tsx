import React, { useState } from "react";
import { Tabs, useSegments } from "expo-router";
import { StyleSheet } from "react-native";

import { family, large } from "@/src/Theme/Font";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { dark, gray, light, primary, pureWhite } from "@/src/Theme/Colors";
import { tabsMenu } from "@/src/Utils/Constants";
import TabsIcons from "@/src/Components/TabsIcons/TabsIcons";
import TabsLabels from "@/src/Components/TabsLabels/TabsLabels";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import StackWrapper from "@/src/HOCs/StackWrapper";
import TabsRightHeader from "@/src/Components/TabsRightHeader/TabsRightHeader";
import BottomSheetView from "@/src/Components/BottomSheetContents/BottomSheet";

const TabsLayout = () => {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  const segments = useSegments();

  return (
    <Screen>
      <Tabs
        screenOptions={{
          headerTitleStyle: {
            fontFamily: family,
            color: theme === "light" ? light.text : dark.text,
            fontSize: large,
            textAlign: "left",
          },
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: theme === "light" ? pureWhite : dark.background,
          },
          headerRight: () => (
            <TabsRightHeader handleOnPress={() => setOpenBottomSheet(true)} />
          ),
          tabBarStyle: [
            styles.tabStyles,
            {
              backgroundColor: theme === "light" ? pureWhite : dark.background,
              borderTopColor: theme === "light" ? pureWhite : dark.darkGray,
            },
          ],
          tabBarInactiveTintColor: gray,
          tabBarActiveTintColor: primary,
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
          name="chats"
          options={{
            title: tabsMenu.chats,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcons
                focused={focused}
                color={color}
                name={tabsMenu.chats}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <TabsLabels focused={focused} textItem={tabsMenu.chats} />
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
                backgroundColor:
                  theme === "light" ? pureWhite : dark.background,
                borderTopColor: theme === "light" ? pureWhite : dark.darkGray,
                display: segments[3] === undefined ? "flex" : "none",
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
        <Tabs.Screen
          name="search"
          options={{
            title: "none",
            href: null,
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
      </Tabs>
      <BottomSheetView
        onCloseFunc={() => setOpenBottomSheet(false)}
        openBottomSheet={openBottomSheet}
      />
    </Screen>
  );
};

export default StackWrapper(TabsLayout);

const styles = StyleSheet.create({
  tabStyles: {
    borderTopWidth: 1,
    paddingTop: 2,
  },
});
