import React from "react";
import Select from "react-select";

/**
 * Dropdown component, with search functionality
 * @param values String values to be displayed
 * @param onChange Callback for new option selection
 */

export interface IDropdownProps {
  values: string[];
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({ values, onChange }) => {
  const labeledValues = values.map((value) => ({ value, label: value }));

  return (
    <Select
      options={labeledValues}
      onChange={(e) => e && onChange(e.value)}
      isClearable={false}
    />
  );
};
