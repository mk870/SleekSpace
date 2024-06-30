import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="postproperty" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default TabsLayout;
