import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { INoPropsReactComponent } from '@/src/GlobalTypes/Types'
import StackScreen from '@/src/Components/StackScreenWrapper/StackScreen'
import Screen from '@/src/Components/ScreenWrapper/Screen'
import ThemedText from '@/src/Components/ThemedText/ThemedText'
import { useAppSelector } from '@/src/Redux/Hooks/Config'

const ProfileUpdate:INoPropsReactComponent = () => {
  const [location,setLocation] = useState<string|undefined>(undefined)
  const [] = useState<string|undefined>(undefined)
  const [] =  useState<string|undefined>(undefined)
  const { width } = useWindowDimensions();
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <Screen>
      <StackScreen>
      <View style={styles.container}>
        <ThemedText type='header'>Please  update your profile below</ThemedText>
        <View style={[styles.inputWrapper, { width: width > 700 ? 600 : "100%" }]}>

        </View>
      </View>
    </StackScreen>
    </Screen>
  )
}

export default ProfileUpdate

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    gap:20,
    alignItems:"center"
  },
  inputWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 12,
    borderRadius: 10,
  },
})