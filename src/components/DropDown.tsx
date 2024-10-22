"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  SharedSelection,
} from "@nextui-org/react";
import { ArrowDownWideNarrow, Filter } from "lucide-react";
import React from "react";

const DropDown = ({ name }: { name: string }) => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const selectedValue =
    selectedKeys.length === 0 ? (
      name === "Filter" ? (
        <Filter size={20} />
      ) : (
        <ArrowDownWideNarrow size={20} />
      )
    ) : (
      selectedKeys[0]
    );

  const handleSelectionChange = (keys: SharedSelection) => {
    const selected = Array.from(keys);
    setSelectedKeys(selected as string[]);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="warning" variant="flat">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
