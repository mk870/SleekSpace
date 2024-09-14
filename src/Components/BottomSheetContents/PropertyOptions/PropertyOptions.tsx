import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  closeBottomSheetFunc: () => void;
};

const PropertyOptions:React.FC<Props> = ({closeBottomSheetFunc}) => {
  return (
    <View>
      <Text>PropertyOptions</Text>
    </View>
  )
}

export default PropertyOptions

const styles = StyleSheet.create({})