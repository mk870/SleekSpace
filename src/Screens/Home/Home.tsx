import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '@/src/Components/ScreenWrapper/Screen'
import ThemedText from '@/src/Components/ThemedText/ThemedText'
import { StatusBar } from 'expo-status-bar'
import { useAppSelector } from '@/src/Redux/Hooks/Config'

type Props = {}

const Home = (props: Props) => {
  const theme = useAppSelector((state)=>state.theme.value)
  return (
    <Screen>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ThemedText type='regular'>Home</ThemedText>
    </Screen>
  )
}

export default Home

const styles = StyleSheet.create({})