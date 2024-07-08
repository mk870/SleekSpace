import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '@/src/Components/ScreenWrapper/Screen'
import ThemedText from '@/src/Components/ThemedText/ThemedText'

type Props = {}

const PostProperty = (props: Props) => {
  return (
    <Screen>
      <ThemedText type='regular'>PostProperty</ThemedText>
    </Screen>
  )
}

export default PostProperty

const styles = StyleSheet.create({})