import React from "react";
import { Stack } from "expo-router";

const AccountLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="account/index" options={{ headerShown: false }} />
      <Stack.Screen name="account/history" options={{ headerShown: false }} />
      <Stack.Screen name="account/legals" options={{ headerShown: false }} />
      <Stack.Screen name="account/manager" options={{ headerShown: false }} />
      <Stack.Screen
        name="account/notifications"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="account/payments" options={{ headerShown: false }} />
      <Stack.Screen name="account/profile" options={{ headerShown: false }} />
      <Stack.Screen name="account/support" options={{ headerShown: false }} />
      <Stack.Screen name="account/theme" options={{ headerShown: false }} />
      <Stack.Screen
        name="account/termsAndconditions"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default AccountLayout;
