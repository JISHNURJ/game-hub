import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface Props {
  onSelectOrder: (order: string) => void;
  sortOrderProp: string;
}

const SortSelector = ({ onSelectOrder, sortOrderProp }: Props) => {
  const sortOrder = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Released date",
    },
    {
      value: "metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortOrderProp
  );
  return (
    <Menu>
      <MenuButton as={Button}>
        Order by {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((each) => (
          <MenuItem
            onClick={() => onSelectOrder(each.value)}
            key={each.value}
            value={each.value}
          >
            {each.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
