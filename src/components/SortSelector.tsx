import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Order by : relevance</MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>date added</MenuItem>
        <MenuItem>type</MenuItem>
        <MenuItem>order</MenuItem>
        <MenuItem>rating</MenuItem>
        <MenuItem>descp</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
