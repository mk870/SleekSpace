import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  setPropertyType: React.Dispatch<React.SetStateAction<IPropertyType>>,
}

const AnimatedListHeader:React.FC<Props> = ({setPropertyType}) => {
  const height = 220
  return (
    <Animated.View style={[styles.container,{height}]}>
      <Text>Hie</Text>
    </Animated.View>
  )
}

export default AnimatedListHeader

const styles = StyleSheet.create({
  container:{
    // position:"absolute",
    // top:0,
    // left:0,
    // right:0,
    backgroundColor:"red"
  }
})