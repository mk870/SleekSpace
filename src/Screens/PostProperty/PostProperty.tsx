import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '@/src/Components/ScreenWrapper/Screen'
import ThemedText from '@/src/Components/ThemedText/ThemedText'
import { useAppSelector } from '@/src/Redux/Hooks/Config'
import { INoPropsReactComponent } from '@/src/GlobalTypes/Types'

const PostProperty:INoPropsReactComponent = () => {
  const isPayWallActive = useAppSelector((state)=>state.hasPayWall.value)
  console.log("paywall",isPayWallActive)
  return (
    <Screen>
      <ThemedText type='regular'>PostProperty</ThemedText>
    </Screen>
  )
}

export default PostProperty

const styles = StyleSheet.create({})