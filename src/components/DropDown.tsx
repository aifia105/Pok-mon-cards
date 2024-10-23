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

type dropDownListType = {
  type: string;
  icon: JSX.Element;
}[];

const DropDown = ({
  name,
  dropDownList,
}: {
  name: string;
  dropDownList: dropDownListType;
}) => {
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
        {dropDownList.map((item) => (
          <DropdownItem
            className="p-2"
            key={item.type}
            startContent={item.icon}
          >
            {item.type}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
