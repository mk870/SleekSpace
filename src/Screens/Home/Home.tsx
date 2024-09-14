import React from "react";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import PropertiesScreenWrapper from "@/src/Components/PropertiesScreenWrapper/PropertiesScreenWrapper";
import ResidentialRentals from "./Properties/ResidentialRentals";
import ResidentialForSale from "./Properties/ResidentialForSale";
import CommercialForSale from "./Properties/CommercialForSale";
import CommercialRentals from "./Properties/CommercialRentals";
import Stands from "./Properties/Stands";
import Lands from "./Properties/Lands";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";


const Home:INoPropsReactComponent = () => {
  return (
    <Screen>
      <PropertiesScreenWrapper>
        <ResidentialRentals/>
        <ResidentialForSale/>
        <CommercialRentals/>
        <CommercialForSale/>
        <Stands/>
        <Lands/>
      </PropertiesScreenWrapper>
    </Screen>
  );
};

export default Home;
