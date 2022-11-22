/* eslint react/jsx-props-no-spreading: off */
// ☝️ we want this component to be usable with chakra props
import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

const HeroDiamond = props => {
  const fillColor = useColorModeValue("#551D98", "#DABFFF");

  return (
    <chakra.svg
      {...props}
      width="57px"
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        path: {
          fill: fillColor,
        },
      }}
    >
      <path d="M56.4274 37.3758H53.7568V40.0463H56.4274V37.3758Z" />
      <path d="M53.7569 24.0929H43.127V13.4456H45.7801V10.7925H43.127V8.12196H13.8731V10.7925H11.2025V13.4456H8.54943V16.0987H5.89632V18.7693H3.22577V21.4224H0.572662V29.3991H3.22577V26.746H16.5262V32.0697H19.1793V37.3759H21.8499V42.6996H24.503V48.0232H27.1735V26.746H37.8034V32.0697H35.1503V37.3759H32.4797V42.6996H29.8266V48.0232H27.1735V50.6763H24.503V53.3469H27.1735V56H29.8266V53.3469H32.4797V50.6763H35.1503V48.0232H37.8034V45.3701H40.4739V42.6996H43.127V40.0465H45.7801V37.3759H48.4507V34.7228H51.1038V32.0697H53.7569V29.3991H56.4275V21.4224H53.7569V24.0929ZM37.8034 24.0929H19.1793V21.4224H16.5262V10.7925H27.1735V13.4456H29.8266V16.0987H32.4797V18.7693H35.1503V21.4224H37.8034V24.0929Z" />
      <path d="M53.757 45.3704H51.1039V48.0235H53.757V45.3704Z" />
      <path d="M53.757 18.7695H51.1039V21.4226H53.757V18.7695Z" />
      <path d="M51.1038 48.0233H48.4507V50.6764H51.1038V48.0233Z" />
      <path d="M51.1038 42.6999H48.4507V45.3705H51.1038V42.6999Z" />
      <path d="M51.1038 16.099H48.4507V18.7696H51.1038V16.099Z" />
      <path d="M48.4507 5.46915H45.7802V8.12225H48.4507V10.7928H51.1038V8.12225H53.7569V5.46915H51.1038V2.79859H48.4507V5.46915Z" />
      <path d="M48.4507 45.3704H45.7802V48.0235H48.4507V45.3704Z" />
      <path d="M48.4507 13.4457H45.7802V16.0988H48.4507V13.4457Z" />
      <path d="M43.1271 53.3467H40.474V55.9998H43.1271V53.3467Z" />
      <path d="M43.1271 0.145317H40.474V2.79842H43.1271V0.145317Z" />
      <path d="M27.1736 13.4457H24.5031V16.0988H27.1736V13.4457Z" />
      <path d="M27.1736 2.79859H24.5031V5.46915H27.1736V2.79859Z" />
      <path d="M24.5029 48.0233H21.8498V50.6764H24.5029V48.0233Z" />
      <path d="M24.5029 16.099H21.8498V18.7696H24.5029V16.099Z" />
      <path d="M21.8498 45.3704H19.1793V48.0235H21.8498V45.3704Z" />
      <path d="M21.8498 18.7695H19.1793V21.4226H21.8498V18.7695Z" />
      <path d="M19.1795 50.6766H16.5264V53.3472H19.1795V50.6766Z" />
      <path d="M19.1795 42.6999H16.5264V45.3705H19.1795V42.6999Z" />
      <path d="M16.5266 40.0466H13.8735V42.6997H16.5266V40.0466Z" />
      <path d="M13.8728 37.3758H11.2023V40.0463H13.8728V37.3758Z" />
      <path d="M11.2025 34.7228H8.54935V37.3759H11.2025V34.7228Z" />
      <path d="M11.2025 5.46873H8.54935V8.12183H11.2025V5.46873Z" />
      <path d="M5.89645 42.6999V45.3705H3.22589V48.0236H5.89645V50.6767H8.54955V48.0236H11.2027V45.3705H8.54955V42.6999H5.89645Z" />
      <path d="M8.54956 32.0699H5.89645V34.723H8.54956V32.0699Z" />
      <path d="M8.54956 8.12196H5.89645V10.7925H8.54956V8.12196Z" />
      <path d="M8.54956 2.79859H5.89645V5.46915H8.54956V2.79859Z" />
      <path d="M5.89645 29.3991H3.22589V32.0696H5.89645V29.3991Z" />
      <path d="M5.89645 5.46873H3.22589V8.12183H5.89645V5.46873Z" />
      <path d="M3.22577 37.3758H0.572662V40.0463H3.22577V37.3758Z" />
    </chakra.svg>
  );
};

export default HeroDiamond;
