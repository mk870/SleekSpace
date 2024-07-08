import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '@/src/Components/ScreenWrapper/Screen'
import ThemedText from '@/src/Components/ThemedText/ThemedText'

type Props = {}

const Home = (props: Props) => {
  return (
    <Screen>
      <ThemedText type='regular'>Home</ThemedText>
    </Screen>
  )
}

export default Home

const styles = StyleSheet.create({})