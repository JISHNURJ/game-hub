import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default Navbar;
