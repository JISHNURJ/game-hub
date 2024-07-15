import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platfrom: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatform();

  if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((each) => (
          <MenuItem onClick={() => onSelectPlatform(each)}>
            {" "}
            {each.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
