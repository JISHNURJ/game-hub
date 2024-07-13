import { Platform } from "../hooks/useGames";

import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // index signature [key:string]
    pc: FaWindows,
    playstation: FaPlaystation,
    linus: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    xbox: FaXbox,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color={"gray.500"}
          marginTop={"10px"}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
