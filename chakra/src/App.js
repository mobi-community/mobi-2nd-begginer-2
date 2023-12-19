import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import AccordionBox from "./components/Accordion";
import SliderBox from "./components/Slider";
import ChBadge from "./components/Badge";
import ChStepper from "./components/Stepper";

function App() {
  return (
    <ChakraProvider>
      <AccordionBox />
      <SliderBox />
      <ChBadge />
      <ChStepper />
    </ChakraProvider>
  );
}

export default App;
