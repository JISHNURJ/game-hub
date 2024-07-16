import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Box
      w="100%"
      h="100px"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      pos={"fixed"}
      zIndex={4}
    >
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default Navbar;
