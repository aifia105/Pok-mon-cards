"use client";
import { pokemonIconsGetter, pokemonStatGetter } from "@/types/operations";
import { ArrowDownWideNarrow, Filter, Check } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

type dropDownListType = {
  type: string;
  icon: (color: string, size: string) => JSX.Element;
}[];

const DropDown = ({
  name,
  dropDownList,
  onSelect,
}: {
  name: string;
  dropDownList: dropDownListType;
  onSelect: Dispatch<SetStateAction<string>>;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedDefaultValue =
    selectedItem === "" ||
    selectedItem === "All" ||
    selectedItem === "Number" ? (
      name === "Filter" ? (
        <Filter size={20} />
      ) : (
        <ArrowDownWideNarrow size={20} />
      )
    ) : (
      dropDownList
        .find((icon) => icon.type === selectedItem)
        ?.icon("amber-500", "22")
    );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center w-[89px] h-[42px] items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-500 rounded-xl transition-colors duration-200"
      >
        {selectedDefaultValue}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-30 w-48 mt-2 bg-gray-100 dark:bg-[#18181B] rounded-xl shadow-lg ">
          <ul className="p-1 ">
            {dropDownList.map((item) => {
              const icons =
                name === "Filter"
                  ? pokemonIconsGetter(item.type, "amber-500", "22")
                  : pokemonStatGetter(item.type, "amber-500", "22");
              return (
                <li key={item.type}>
                  <button
                    onClick={() => handleSelect(item.type)}
                    className={`w-full px-4 py-2 text-left flex items-center gap-2 justify-between hover:bg-gray-700/50 hover:rounded-xl hover:transition-all text-gray-700 dark:text-gray-300 
                      `}
                  >
                    <span className="flex items-center gap-2">
                      {icons}
                      <span>{item.type}</span>
                    </span>
                    {selectedItem === item.type &&
                      selectedItem !== "All" &&
                      selectedItem !== "Number" && (
                        <Check size={16} className="text-amber-500" />
                      )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
