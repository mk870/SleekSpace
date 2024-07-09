import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '@/src/Components/ThemedText/ThemedText'
import Screen from '@/src/Components/ScreenWrapper/Screen'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Screen>
      <ThemedText type='regular'>Profile</ThemedText>
    </Screen>
  )
}

export default Profile

const styles = StyleSheet.create({})