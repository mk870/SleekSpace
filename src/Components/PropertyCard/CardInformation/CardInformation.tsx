import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ICommercialPropertyForSale } from '@/src/GlobalTypes/Property/Commercial/ForSaleTypes';
import { ICommercialRentalProperty } from '@/src/GlobalTypes/Property/Commercial/RentalTypes';
import { ILandProperty } from '@/src/GlobalTypes/Property/Land/LandTypes';
import { IResidentialPropertyForSale } from '@/src/GlobalTypes/Property/Residential/ForSaleTypes';
import { IResidentialRentalProperty } from '@/src/GlobalTypes/Property/Residential/RentalTypes';
import { IStandProperty } from '@/src/GlobalTypes/Property/Stand/StandTypes';
import { PropertyTypesEnum } from '@/src/Utils/Constants';

type Props =
  | {
      type: PropertyTypesEnum.ResidentialRentals;
      property: IResidentialRentalProperty;
    }
  | {
      type: PropertyTypesEnum.ResidentialForSale;
      property: IResidentialPropertyForSale;
    }
  | {
      type: PropertyTypesEnum.CommercialForSale;
      property: ICommercialPropertyForSale;
    }
  | {
      type: PropertyTypesEnum.CommercialRentals;
      property: ICommercialRentalProperty;
    }
  | {
      type: PropertyTypesEnum.Stands;
      property: IStandProperty;
    }
  | {
      type: PropertyTypesEnum.Land;
      property: ILandProperty;
    };
const CardInformation:React.FC<Props> = ({type,property}) => {
  return (
    <View>
      <Text>CardInformation</Text>
    </View>
  )
}

export default CardInformation

const styles = StyleSheet.create({})