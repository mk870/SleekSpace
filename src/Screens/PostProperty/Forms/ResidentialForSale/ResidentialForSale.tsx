import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { INoPropsReactComponent } from '@/src/GlobalTypes/Types'
import PropertyTypeScreenWrapper from '../Shared/PropertyTypeScreenWrapper';

const ResidentialForSale:INoPropsReactComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <PropertyTypeScreenWrapper>
      <View>
      <Text>ResidentialForSale</Text>
    </View>
    </PropertyTypeScreenWrapper>
  )
}

export default ResidentialForSale

const styles = StyleSheet.create({})