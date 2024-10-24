"use client";
import { pokemonIconsGetter, pokemonStatGetter } from "@/types/operations";
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
  icon: (color: string, size: string) => JSX.Element;
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
    <Dropdown shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button color="warning" className="font-medium text-md" variant="flat">
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
        {dropDownList.map((item) => {
          const icons =
            name === "Filter"
              ? pokemonIconsGetter(item.type, "amber-500", "20")
              : pokemonStatGetter(item.type, "amber-500", "20");
          return (
            <DropdownItem
              className="p-2 font-medium"
              key={item.type}
              startContent={icons}
            >
              {item.type}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
