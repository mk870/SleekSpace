import { StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'

import Screen from '@/src/Components/ScreenWrapper/Screen'
import { INoPropsReactComponent } from '@/src/GlobalTypes/Types'

const Account:INoPropsReactComponent = () => {
  const theme =useColorScheme()
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
}

export default Account

const styles = StyleSheet.create({})